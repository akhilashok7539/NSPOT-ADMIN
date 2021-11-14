import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { endPoints } from 'src/app/config/endPoints';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  courseslist: any = [];
  instituteFilterSelected: any = [];
  courslistupdated: any = [];
  instituteFilter: any = [];
  onFilter = 0;
  form: FormGroup;
  districtList = [];
  stateList = [];
  accademicLevels = [];
  accademicLevelsCourses;
  courseStreams;
  courseStreamsSpecializations;
  courseTypes;
  universityTypes;
  courses
  courseStreamsSpecializations3;
  courseStreamsSpecializations4;
  instituteList:any=[];
  accademicLevels1;
  accademicLevels2;
  accademicLevels3;
  accademicLevels4;
  accademicLevels5;
  accademicLevels6;
  searchText;
  district;
  campusname;
  constructor(private apiService: ApiService, private formBuilder: FormBuilder,
    private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getallcourser();
    this.form = this.formBuilder.group({
      CourseCategoryId: [''],
      CourseSubCategoryId: [''],
      // courseTypeId: [''],
      CourseSubCategory2Id: [''],
      CourseSubCategory3Id: [''],
      CourseSubCategory4Id: [''],
      CourseSubCategory5Id: [''],
      districtId: [''],
      stateId: [''],
      instituteId:['']
    });
    this.loadData();
  }
  loadData(): void {
    this.apiService.doGetRequest(`/course-categories`).subscribe((returnData: any) => {
      this.accademicLevels = returnData.data;
      console.log("accademic levels ", this.accademicLevels);
    });
    this.apiService.doGetRequest(`state/`).subscribe((returnData: any) => {
      this.stateList = returnData.data;
      console.log(this.stateList);
    });
    this.apiService.doGetRequest(`institute`).subscribe((returnData: any) => {
      this.instituteList = returnData.data;
      console.log(this.instituteList);
    });
  }
  getallcourser() {
    let req =
    {

    }
    this.apiService.doPostRequest(`/institute/course/filter`, req).subscribe(
      data => {
        this.courseslist = data['result']
        for (let i = 0; i <= this.courseslist.length; i++) {
          if (this.courseslist[i]?.item?.status === "Pending" || this.courseslist[i]?.item?.status === "Approved") {
            this.courslistupdated.push(this.courseslist[i])
          }
        }
        console.log(this.courslistupdated);

      }
    )
  }
  oninstituteFilter() {

  }
  oninstituteFiltercancel() {
    this.onFilter = 0;
  }
  onFilterClick(index) {
    this.onFilter = index;


  }
  approved(id) {
    console.log(id);
    let req = {
      "status": "Approved"
    }
    this.apiService.doPutRequest("institute/course/update/status/" + id, req).subscribe(
      data => {
        this.courslistupdated = [];

        this.toaster.success("Course Approved")
        this.ngOnInit();
      },
      error => {
        this.toaster.success("Unable to Approve course!please try again")

      }
    )
  }
  rejected(id) {
    console.log(id);
    let req = {
      "status": "Rejected"
    }
    this.apiService.doPutRequest("institute/course/update/status/" + id, req).subscribe(
      data => {
        this.courslistupdated = [];

        this.ngOnInit();

        this.toaster.success("Course Rejected")
      },
      error => {
        this.toaster.success("Unable to Reject course!please try again")

      }
    )
  }
  loaddistricts(event) {
    console.log(event);

    let stateId = event;
    this.apiService.doGetRequest(`district/` + event).subscribe((returnData: any) => {
      this.districtList = returnData.data;
      // let req = {
      //   createdAt: "2021-07-09T06:10:38.752Z",
      //   id: 0,
      //   state: "All",
      //   updatedAt: "2021-07-09T06:10:38.752Z"
      // }
      // this.districtList.push(req)
      // console.log(this.districtList);
    });
  }


  loadAccademicLevelCourses(event): void {

    // const academicLevelId = event.target.value;
    const academicLevelId = event;

    this.apiService.doGetRequest(`course-categories/subcategory/` + academicLevelId).subscribe((returnData: any) => {
      this.accademicLevelsCourses = returnData.data;
      console.log(this.accademicLevelsCourses);
    });
  }

  loadCourseStreamSpecializations(event): void {
    const streamId = event.target.value;
    // alert(academicLevelId)
    this.apiService.doGetRequest(endPoints.Get_courseStream_specialization + streamId).subscribe((returnData: any) => {
      this.courseStreamsSpecializations = returnData.data;
      console.log(this.courseStreamsSpecializations);
    });
  }
  loadAccademicLevelCoursessubcat(event): void {
    const subcategoryId = event;
    this.apiService.doGetRequest(`course-categories/subcategory2/` + subcategoryId).subscribe((returnData: any) => {
      this.courseStreams = returnData.data;
      console.log(this.accademicLevelsCourses);
    });
  }
  loadAccademicLevelCoursessubcat1(event): void {
    const subcategoryId = event;
    this.apiService.doGetRequest(`course-categories/subcategory3/` + subcategoryId).subscribe((returnData: any) => {
      this.courseStreamsSpecializations = returnData.data;
      console.log(this.accademicLevelsCourses);
    });
  }
  loadAccademicLevelCoursessubcat2(event): void {
    const subcategoryId = event;
    this.apiService.doGetRequest(`course-categories/subcategory4/` + subcategoryId).subscribe((returnData: any) => {
      this.courseStreamsSpecializations3 = returnData.data;
      console.log(this.accademicLevelsCourses);
    });
  }
  loadAccademicLevelCoursessubcat3(event): void {
    const subcategoryId = event;
    this.apiService.doGetRequest(`course-categories/subcategory5/` + subcategoryId).subscribe((returnData: any) => {
      this.courseStreamsSpecializations4 = returnData.data;
      console.log(this.accademicLevelsCourses);
    });
  }
  removeEmptyStringsData(obj) {
    const dataObj = { ...obj };
    Object.entries(dataObj).forEach(([key, val]) => val === "" && delete dataObj[key] && dataObj[key] !== []);
    let urlParams = new URLSearchParams();
    for (let key of Object.keys(dataObj)) {
      urlParams.set(key, dataObj[key])
    }
    return urlParams;
  }
  onSubmit() {
    // this.touched = true;
    console.log(document.getElementsByClassName('ng-invalid'))
    if (this.form.invalid) {
      return;
    }

    const formData = this.form.value;
    console.log(formData);
    for (var key in formData) {
      if (formData[key] === "") {
        delete formData[key];
      } else {
        // formData[Map[key]] = formData[key];
        // delete formData[key];
      }
    }
    console.log(formData);

    this.apiService.doPostRequest(`/institute/course/filter`, formData).subscribe(
      data => {
        this.courseslist = [];
        this.courslistupdated = [];
        this.courseslist = data['result']
        for (let i = 0; i <= this.courseslist.length; i++) {
          if (this.courseslist[i]?.item?.status === "Pending" || this.courseslist[i]?.item?.status === "Approved") {
            this.courslistupdated.push(this.courseslist[i])
          }
        }
        console.log(this.courslistupdated);

      }
    )
  }
}
