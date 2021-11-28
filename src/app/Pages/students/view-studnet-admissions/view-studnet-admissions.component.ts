import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-studnet-admissions',
  templateUrl: './view-studnet-admissions.component.html',
  styleUrls: ['./view-studnet-admissions.component.css']
})
export class ViewStudnetAdmissionsComponent implements OnInit {
  studentId;
  studentName;
  search;
  resposneList:any=[];
  constructor(private activaterouter:ActivatedRoute,private router:Router,
    private apiservice:ApiService) { }

  ngOnInit(): void {
    this.activaterouter.paramMap.subscribe(
      data =>{
        console.log(data);
        this.studentId =data['params']['id']
        this.studentName =data['params']['name']

      }
    )
    this.loaddata();
  }
  loaddata()
  {
    this.apiservice.doGetRequest("applicationForm/applications/?where[studentId]="+this.studentId).subscribe(
      data =>{
        this.resposneList = data['data']
      }
    )
  }
  viewCourse(s)
  {
    this.router.navigate(['/view-coursedetails/'+s.item.courseId+'/'+s.CourseName])
  }
  viewapplciations(s)
  {
    console.log(s);
    
    // viewApplications/1/7
    this.router.navigate(['/viewApplications/'+s.item.id+'/'+s.item.Institute_Course.Institute.userId])
  }
}
