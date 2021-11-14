import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-payment-history',
  templateUrl: './view-payment-history.component.html',
  styleUrls: ['./view-payment-history.component.css']
})
export class ViewPaymentHistoryComponent implements OnInit {
  courseslist:any=[];
  instituteFilterSelected: any = [];
  courslistupdated:any=[];
  instituteFilter:any = [];
  onFilter=0;
  constructor(private apiserive:ApiService,private toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.getallcourser();
  }

  getallcourser(){
   
    this.apiserive.doGetRequest(`/payment/courseFee/admin`).subscribe(
      data =>{
        this.courseslist = data['result']
      // console.log(this.courseslist);
        for(let i=0;i<this.courseslist.length;i++)
        {
          if(this.courseslist[i]['item'].status === "paid")
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
  getcoursename(id)
  {
    //  this.apiserive.doGetRequest("institute/course/courseName/"+id).subscribe(
    //   data =>{
    //      data['CourseName']
    //   }
    // )
  }
  viewcourse(id)
  {
    this.router.navigate(['/view-coursedetails/'+id+"/course name"]);
  }
}
