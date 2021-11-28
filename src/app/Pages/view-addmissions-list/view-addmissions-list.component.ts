import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-addmissions-list',
  templateUrl: './view-addmissions-list.component.html',
  styleUrls: ['./view-addmissions-list.component.css']
})
export class ViewAddmissionsListComponent implements OnInit {
  instituteId;
  collegeName;
  courses:any = [];
  feeremmitedSApplicants:any=[];
  currentCourseId;
  searchText;
  constructor(private activaterouter:ActivatedRoute,private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.activaterouter.paramMap.subscribe(
      data =>{
        console.log(data);
        this.instituteId = data['params']['id']
        this.collegeName = data['params']['name']

      }
    )
    this.apiService.doGetRequest(`institute/courses/`+this.instituteId).subscribe(
      data =>{
        this.courses = data['data']
      },
      error =>{

      }
    )
  }
  changeCourse(event) {
    this.feeremmitedSApplicants = [];
    this.currentCourseId = event.target.value;
    this.loadDataForCourse(this.currentCourseId)
  }
  loadDataForCourse(currentCourseId)
  {
    let courseFeeRemittedreq ={
      "courseId":currentCourseId,
     
    }
    this.apiService.doPostRequest('payment/courseFee/institute/',courseFeeRemittedreq).subscribe(
      data =>{
        console.log(data);
        
        let arr = [];
        arr = data['result']
        // console.log("Fee paid students list",arr);
        if( data['result'].length === 0)
        {
          this.feeremmitedSApplicants = [];
        }
        else{
  
  
        for(let i=0;i<=arr.length;i++)
        {
          if(arr[i]?.item?.status === "paid")
          {
            this.feeremmitedSApplicants.push(arr[i])
          }
        }
      }
        console.log("Fee paied students",this.feeremmitedSApplicants);
        
      },
      error =>{

      }
    )

  }
  getname(s)
  {
    // console.log(JSON.parse(s.item.ApplicationForm_submission.formFieldValues));
    let personalinfo = JSON.parse(s.item.ApplicationForm_submission.formFieldValues);
    // console.log(personalinfo.personalInfo.fullName);
    return personalinfo.personalInfo.fullName
  }
  getpaymentTenture(id){
    console.log(id);
    
    return (
      this.feeremmitedSApplicants.find((el) => el.id.toString() === (id || "").toString()) || {
        title: "",
      }
    );
  }
  viewapplication(item)
  {
    // viewApplications
    let instId = this.courses[0]['item']['Institute']['userId'];
    // let applicationid =  this.courses[0]['item']['ApplicationForm_submission'];
    console.log(instId);
    console.log(item.item.ApplicationForm_submission.id);

    
    this.router.navigate(['/viewApplications/'+item.item.ApplicationForm_submission.id+'/'+instId])
  }
}
