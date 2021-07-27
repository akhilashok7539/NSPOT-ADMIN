import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styleUrls: ['./update-university.component.css']
})
export class UpdateUniversityComponent implements OnInit {
  university;
  universityDetails;
  constructor(private apiservice:ApiService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.universityDetails = JSON.parse(sessionStorage.getItem("univerisity"));
    this.university = this.universityDetails['university'];
  }
  
submit()
{
  let req = {
    university:this.university,
    id:this.universityDetails['id']
  }
  this.apiservice.doPutRequest(`university/update`,req).subscribe(
    data =>{
      this.toaster.success("University Added Successfully")
      this.router.navigate(['/University']);
    }
  )
}

}
