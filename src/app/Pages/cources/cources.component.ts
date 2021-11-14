import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  courseslist:any=[];
  instituteFilterSelected: any = [];
  courslistupdated:any=[];
  instituteFilter:any = [];
  onFilter=0;
  constructor(private apiserive:ApiService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getallcourser();
  }

  getallcourser(){
    let req= 
    {

    }
    this.apiserive.doPostRequest(`/institute/course/filter`,req).subscribe(
      data =>{
        this.courseslist = data['result']
        for(let i=0;i<=this.courseslist.length;i++)
        {
          if(this.courseslist[i]?.item?.status === "Pending" || this.courseslist[i]?.item?.status === "Approved")
          {
            this.courslistupdated.push(this.courseslist[i])
          }
        }
        console.log(this.courslistupdated);
        
      }
    )
  }
  oninstituteFilter()
  {

  }
  oninstituteFiltercancel()
  {
    this.onFilter = 0;
  }
  onFilterClick(index) {
    this.onFilter = index;
  

  }
  approved(id)
  {
    console.log(id);
    let req ={
      "status":"Approved"
    }
    this.apiserive.doPutRequest("institute/course/update/status/"+id,req).subscribe(
      data =>{
  this.courslistupdated=[];

        this.toaster.success("Course Approved")
        this.ngOnInit();
      },
      error =>{
        this.toaster.success("Unable to Approve course!please try again")

      }
    )
  }
  rejected(id)
  {
    console.log(id);
    let req ={
      "status":"Rejected"
    }
    this.apiserive.doPutRequest("institute/course/update/status/"+id,req).subscribe(
      data =>{
  this.courslistupdated=[];

        this.ngOnInit();

        this.toaster.success("Course Rejected")
      },
      error =>{
        this.toaster.success("Unable to Reject course!please try again")

      }
    )
  }
}
