import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-competitive-exam-courses',
  templateUrl: './competitive-exam-courses.component.html',
  styleUrls: ['./competitive-exam-courses.component.css']
})
export class CompetitiveExamCoursesComponent implements OnInit {
  courses:any=[];
  constructor(private apiserive:ApiService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getallcourser();
  }

  getallcourser(){
    let req= 
    {

    }
    this.apiserive.doGetRequest(`institute/course/pending`).subscribe(
      data =>{
        this.courses = data['data']
      }
    )
  }
  approve(item){
    let id = item.id;
    let req ={
      "status":"Approved"
    }
    this.apiserive.doPutRequest(`institute/course/update/status/`+id,req).subscribe(
      data =>{
        this.toaster.success("Course Approved");
        this.getallcourser();
      },
      error =>{
        this.toaster.success("Unable to Approved Course");

      }
    )
  }
  reject(item){
    let id = item.id;
    let req ={
      "status":"Rejected"
    }
    this.apiserive.doPutRequest(`institute/course/update/status/`+id,req).subscribe(
      data =>{
        this.toaster.success("Course Rejected");
        this.getallcourser();
      },
      error =>{
        this.toaster.success("Unable to Reject Course");

      }
    )
  }
  getcourseName(s) {
    // console.log(s.course);

     if (s.Course_Sub_Categories5 === null) {
      if (s.Course_Sub_Categories4 === null) {
        if (s.Course_Sub_Categories3 === null) {
          if (s.Course_Sub_Categories2 === null) {
          }
          else {
            return s.Course_Sub_Categories2['title']
          }
        }
        else {
          return s.Course_Sub_Categories3['title']
        }
      }
      else {
        return s.Course_Sub_Categories4['title']
      }
    }
    else {
      return s.Course_Sub_Categories5['title']
    }
    }
   
    
}
