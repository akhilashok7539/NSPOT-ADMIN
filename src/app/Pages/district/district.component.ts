import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  districtList:any=[];
  stateID;
  constructor(private apiservice:ApiService,private router:Router,
    private activaterouter:ActivatedRoute) { 
    activaterouter.paramMap.subscribe(
      data =>{
        console.log(data['params'].id);
        this.stateID = data['params'].id;
      }
    )
  }

  ngOnInit(): void {
    this.loaddistrict();
  }
  loaddistrict()
  {
    this.apiservice.doGetRequest(`district/`+ this.stateID).subscribe(
      data =>{
        this.districtList = data['data']
      },
      error =>{

      }
    )
  }
  adddist(){
    this.router.navigate(['/add-districts/'+this.stateID]);
  } 
}
