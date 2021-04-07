import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../../services/api.service';
import { endPoints } from '../../config/endPoints';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accademic-level-courses',
  templateUrl: './accademic-level-courses.component.html',
  styleUrls: ['./accademic-level-courses.component.css']
})
export class AccademicLevelCoursesComponent implements OnInit {

  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService,
    private authService: AuthService,
  ) { }

  formAccademicLevel: FormGroup;
  formCourse: FormGroup;
  touchedAccademicLevel = false;
  touchedFormCourse = false;
  addButtonPressed = false;
  selectedLevelId;
  levels;
  courses;
  baseApiUrl = environment.baseApiUrl;

  ngOnInit(): void {
    this.loadAccademicLevels();
    this.formAccademicLevel = this.formBuilder.group({
      title: ['', [Validators.required]],
    });

    this.formCourse = this.formBuilder.group({
      AccademicLevelId: [],
      title: ['', [Validators.required]]
    });
  }

  // loading test data
  loadAccademicLevels(): void {
    this.apiService.doGetRequest(endPoints.Get_academicLevels).subscribe((returnData: any) => {
      this.levels = returnData.data;
      console.log(this.levels);
    });
  }

  // loading questions data
  loadCourses(): void {
    this.courses = null;
    this.apiService.doGetRequest(
      endPoints.Get_academicLevel_Courses + this.selectedLevelId
    ).subscribe((returnData: any) => {
      this.courses = returnData.data;
      console.log(this.courses);
    });
  }

  onSelectingLevel(testId): void {
    this.selectedLevelId = testId;
    this.loadCourses();
    this.formCourse.reset();
  }

  onSubmitLevel(): void {
    this.touchedAccademicLevel = true;
    if (this.formAccademicLevel.invalid) {
      return;
    } else {
      const formData = this.formAccademicLevel.value;
      (document.querySelector('#submit-btn-test') as HTMLInputElement).setAttribute('disabled', '');

      this.apiService.doPostRequest(
        endPoints.Create_accademicLevel,
        formData)
        .subscribe((returnData: any) => {
          if (returnData.status == true) {
            this.toastr.success('Accademic Level added successfully');
            (document.querySelector('#submit-btn-test') as HTMLInputElement).removeAttribute('disabled');
            this.formAccademicLevel.reset();
            this.loadAccademicLevels();
          }
          else {
            this.toastr.error(returnData.error.message);
            (document.querySelector('#submit-btn-test') as HTMLInputElement).removeAttribute('disabled');
            this.formAccademicLevel.reset();
            this.loadAccademicLevels();
          }

        },
          error => {
            console.error(error);
            const message = error.error ? error.error[0].message : 'Something went wrong please try again later.';
            this.toastr.success(message);
            (document.querySelector('#submit-btn-test') as HTMLInputElement).removeAttribute('disabled');
            this.formAccademicLevel.reset();
          });

    }

  }

  onSubmitCourse(): void {
    this.touchedFormCourse = true;
    if (this.formCourse.invalid) {
      return;
    } else {
      this.formCourse.controls.AccademicLevelId.setValue(this.selectedLevelId)
      const formData = this.formCourse.value;
      (document.querySelector('#submit-btn-question') as HTMLInputElement).setAttribute('disabled', '');

      this.apiService.doPostRequest(
        endPoints.Create_levelCourse,
        formData)
        .subscribe((returnData: any) => {
          if (returnData.status == true) {
            this.toastr.success('Course added successfully');
            (document.querySelector('#submit-btn-question') as HTMLInputElement).removeAttribute('disabled');
            this.formCourse.reset();
            this.loadCourses();
          }
          else {
            this.toastr.error(returnData.error.message);
            (document.querySelector('#submit-btn-question') as HTMLInputElement).removeAttribute('disabled');
            this.formCourse.reset();
            this.loadCourses();
          }

        },
          error => {
            console.error(error);
            const message = error.error ? error.error[0].message : 'Something went wrong please try again later.';
            this.toastr.success(message);
            (document.querySelector('#submit-btn-test') as HTMLInputElement).removeAttribute('disabled');
            this.formCourse.reset();
          });
567890
    }

  }

  get f() { return this.formAccademicLevel.controls; }
  get q() { return this.formCourse.controls; }

  view(s)
  {
    sessionStorage.setItem("academic-level",JSON.stringify(s));
    this.router.navigate(['/view-accademic-levels-and-courses'])
  }
  add()
  {
    this.addButtonPressed = true;
  }
}
