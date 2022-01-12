import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-district',
  templateUrl: './edit-district.component.html',
  styleUrls: ['./edit-district.component.css']
})
export class EditDistrictComponent implements OnInit {


  dist;
  distArray=[];
  
  constructor(private apiservice:ApiService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.distArray = JSON.parse(sessionStorage.getItem("distArray"))
    this.dist = this.distArray['district'];
  }
  submit()
  {
    let req = {
      id : this.distArray['id'],
      district:this.dist
    }
    this.apiservice.doPutRequest(`district/update`,req).subscribe(
      data =>{
        this.toaster.success("District updated Successfully")
        this.router.navigate(['districts/'+ this.distArray['stateId']]);
      }
    )
  }
}
