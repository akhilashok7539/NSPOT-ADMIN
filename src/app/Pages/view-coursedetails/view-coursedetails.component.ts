import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-coursedetails',
  templateUrl: './view-coursedetails.component.html',
  styleUrls: ['./view-coursedetails.component.css']
})
export class ViewCoursedetailsComponent implements OnInit {
  applciationId;
  courseDetails:any=[];
  paymentTentures:any=[];
  courseName:any;
  constructor(private activaterouter:ActivatedRoute,
    private apiservice:ApiService
    ) { }

  ngOnInit(): void {
    this.activaterouter.paramMap.subscribe(
      data =>{
        console.log(data['params']);
        this.applciationId= data['params'].id;
        this.courseName = data['params'].name;
      }
    )
    this.loaddata();
  }
  loaddata()
  {
    this.apiservice.doGetRequest("payment-tenures").subscribe(
      data =>{
        this.paymentTentures = data['data']
      },
      error =>{
      }
    )
    this.apiservice.doGetRequest("institute/course/fees/"+this.applciationId).subscribe(
      data =>{
        this.courseDetails = data['data']
      },
      error =>{
      }
    )
  }
}
