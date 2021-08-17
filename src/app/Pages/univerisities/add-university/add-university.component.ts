import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {
  university;

  constructor(private apiservice:ApiService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
submit()
{
  let req = {
    university:this.university
  }
  this.apiservice.doPostRequest(`university/create`,req).subscribe(
    data =>{
      this.toaster.success("University Added Successfully")
      this.router.navigate(['/University']);

    }
  )
}
}
