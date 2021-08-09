import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.css']
})
export class AddBoardComponent implements OnInit {
  university;

  constructor(private apiservice:ApiService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
submit()
{
  console.log(this.university);
  
  if(this.university === undefined)
  {
    this.toaster.error("Please enter board name");

  }
  else{
    let req = {
      title:this.university
    }
    this.apiservice.doPostRequest(`boardType/create`,req).subscribe(
      data =>{
        this.toaster.success("Board Added Successfully")
        this.router.navigate(['/board']);
  
      }
    )
        // this.toaster.success("Board Added Successfully")

  }

}
}