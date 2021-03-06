import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-institues',
  templateUrl: './institues.component.html',
  styleUrls: ['./institues.component.css']
})
export class InstituesComponent implements OnInit {

  institutes:any = [];
  startdate;
  enddates;
  constructor(private apiservice:ApiService,private router:Router,
    private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getallinstitues();
  }
  
  getallinstitues()
  {
    this.apiservice.getallInstitutes().subscribe(
      data =>{
        console.log(data);
        this.institutes = data['data']
      },
      error =>{


      }
    )
  }
  Deactivated(s)
  {
    console.log(s.id);
  let req = {
    "isActive":false
  }
  this.apiservice.doPutRequest("user/update/activeStatus/"+s.userId,req).subscribe(

    data =>{
      this.toaster.success("Status Changed")
      this.ngOnInit();
    },
    error =>{
      this.toaster.error("Unable to change status")

    })
  this.apiservice.doPutRequest("/institute/update/"+s.id,req).subscribe(

    data =>{
      // this.toaster.success("Status Changed")
      this.ngOnInit();
    },
    error =>{
      // this.toaster.error("Unable to change status")

    }
  )
  }
  Activated(s)
  {
    console.log(s);
    let req = {
      "isActive":true
    }
    this.apiservice.doPutRequest("user/update/activeStatus/"+s.userId,req).subscribe(

      data =>{
        this.toaster.success("Status Changed")
        this.ngOnInit();
  
      },
      error =>{
        this.toaster.error("Unable to change status")

        
      }
    )
    this.apiservice.doPutRequest("/institute/update/"+s.id,req).subscribe(

      data =>{
        // this.toaster.success("Status Changed")
        this.ngOnInit();
      },
      error =>{
        // this.toaster.error("Unable to change status")
  
      }
    )
  }
  startDate(event)
  {
    this.startdate = event.target.value;
  }
  endDate(event)
  {
    this.enddates = event.target.value;

  }
  apply()
  {
    if(this.startdate != null && this.enddates != null)
    {
      let req ={
        "startDate":this.startdate,
          "endDate":this.enddates
      }
      this.apiservice.doPostRequest("institute/byDate",req).subscribe(
        data =>{
          console.log(data);
          this.institutes = data['data']
        },
        error =>{
  
        }
      )
    }
   
  }
  sendcredntials(item)
  {
    this.apiservice.doGetRequest("institute/sendUserCredEmail/"+item.id).subscribe(
      data=>{
        this.toaster.success("credentials sent successfully");
        
      },
      error=>{
        this.toaster.success("unable to send the details");

      }
    )
    // https://nspot-qa.herokuapp.com/api/institute//sendUserCredEmail/:instituteId
  }
  view(item)
  {
    console.log(item);
    this.router.navigate(['/viewAdmissionslist/'+item.id+'/'+item.name])
    
  }
}
