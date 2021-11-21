import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-institues',
  templateUrl: './institues.component.html',
  styleUrls: ['./institues.component.css']
})
export class InstituesComponent implements OnInit {

  institutes:any = [];
  constructor(private apiservice:ApiService,private toaster:ToastrService) { }

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
  this.apiservice.doPutRequest("user/update/activeStatus/"+s.id,req).subscribe(

    data =>{
      this.toaster.success("Status Changed")
      this.ngOnInit();
    },
    error =>{
      this.toaster.error("Unable to change status")

    }
  )
    
  }
  Activated(s)
  {
    console.log(s);
    let req = {
      "isActive":true
    }
    this.apiservice.doPutRequest("user/update/activeStatus/"+s.id,req).subscribe(

      data =>{
        this.toaster.success("Status Changed")
        this.ngOnInit();
  
      },
      error =>{
        this.toaster.error("Unable to change status")

        
      }
    )
  }
}
