import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-otherboard',
  templateUrl: './update-otherboard.component.html',
  styleUrls: ['./update-otherboard.component.css']
})
export class UpdateOtherboardComponent implements OnInit {
  university;
  universityDetails;
  constructor(private apiservice:ApiService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.universityDetails = JSON.parse(sessionStorage.getItem("board"));
    this.university = this.universityDetails['title'];
  }
  
submit()
{
  
  let req = {
    title:this.university,
    id:this.universityDetails['id']
  }
  this.apiservice.doPutRequest(`otherBoardType/update`,req).subscribe(
    data =>{
      this.toaster.success("Board Updated Successfully")
      this.router.navigate(['/other-board']);
    }
  )
}

}