import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.css']
})
export class AddDistrictComponent implements OnInit {
  dist;
  stateId;
  constructor(private apiservice:ApiService,private router:Router,private toaster:ToastrService,
    private activaterouter:ActivatedRoute) { 
    activaterouter.paramMap.subscribe(
      data =>{
        console.log(data['params'].id);
        this.stateId = data['params'].id;
      }
    )
  }


  ngOnInit(): void {
  }
submit()
{
  let req = {
    stateId:this.stateId,
    district:this.dist
  }
  this.apiservice.doPostRequest(`district/create`,req).subscribe(
    data =>{
      this.toaster.success("District Added Successfully")
      this.router.navigate(['districts/'+this.stateId]);
    }
  )
}
}
