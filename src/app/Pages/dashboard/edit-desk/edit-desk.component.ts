import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-desk',
  templateUrl: './edit-desk.component.html',
  styleUrls: ['./edit-desk.component.css']
})
export class EditDeskComponent implements OnInit {

  category;
  deskData=[];
  constructor(private apiservice:ApiService,private router:Router,
    private Toaster:ToastrService) { }

  ngOnInit(): void {
    this.deskData = JSON.parse(sessionStorage.getItem("maindesk"))
    this.category = this.deskData['title']
  }
  submit(){
    let req ={
      "id":this.deskData['id'],
      "title":this.category
    }
    console.log(req);
    this.apiservice.updatedesk(req).subscribe(
      data =>{
        this.Toaster.success("Deks Type udpated")
        this.category = "";
        this.router.navigate(['/dashboard'])
      },
      error =>{
        this.Toaster.error("Unable to Add  Desk Type ")

      }
    )
  }
  }
