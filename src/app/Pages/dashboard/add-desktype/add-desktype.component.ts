import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-desktype',
  templateUrl: './add-desktype.component.html',
  styleUrls: ['./add-desktype.component.css']
})
export class AddDesktypeComponent implements OnInit {

  category;
  constructor(private apiservice:ApiService,private Toaster:ToastrService) { }

  ngOnInit(): void {
  }
  submit(){
    let req ={
      "title":this.category
    }
    console.log(req);
    this.apiservice.adddesktype(req).subscribe(
      data =>{
        this.Toaster.success("Deks Type Added")
        this.category = "";
      },
      error =>{
        this.Toaster.error("Unable to Add  Desk Type ")

      }
    )
  }

}
