import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-courses-academiclevel',
  templateUrl: './view-courses-academiclevel.component.html',
  styleUrls: ['./view-courses-academiclevel.component.css']
})
export class ViewCoursesAcademiclevelComponent implements OnInit {

  course:any = [];
  academiclevelCourses :any =[];
  formCourse: FormGroup;
  formview = false;
  touchedFormCourse = false;
  title;
  courseId;
  constructor(   private formBuilder: FormBuilder,
 
    private toastr: ToastrService, private apiService: ApiService,) { }

  ngOnInit(): void {
    this.formCourse = this.formBuilder.group({
   
      title: ['', [Validators.required]]
    });
    this.course = JSON.parse(sessionStorage.getItem("academic-level"));
    this.getAcademiclevelCoursebyId();
  }
  get q() { return this.formCourse.controls; }
  getAcademiclevelCoursebyId()
  {
    this.apiService.getallAcademicLevelCourseById(this.course['id']).subscribe(
      data =>{
        this.academiclevelCourses = data['data'];
      },
      error =>{

      }
    )
  }
  onSubmitCourse(): void {
   
    if(this.title == undefined || this.title == null)
    {
      this.toastr.error("Please enter a valid course")
    }
    else{
      console.log(this.title);
      let req ={
        "AccademicLevelId": this.course['id'],
        "title": this.title
      }
      this.apiService.addAcademicLevelCourses(req).subscribe(
        data =>{
          this.toastr.success("Courses Added Successfully");
          this.getAcademiclevelCoursebyId();
          this.formCourse.reset();
        },
        error =>{

        }
      )
    }
      

  }
  add()
  {
    this.formview = true;
  }
}
