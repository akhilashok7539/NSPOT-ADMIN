import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-desktype',
  templateUrl: './desktype.component.html',
  styleUrls: ['./desktype.component.css']
})
export class DesktypeComponent implements OnInit {
  category;
  catgroryarray:any = [];
  catname;
  constructor(private apiservice:ApiService,private Toaster:ToastrService) { }

  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("Categorys"));
    this.catname = this.catgroryarray.title;
  }
  submit(){
    let req ={
      "title":this.category,
      "CourseCategoryId":this.catgroryarray.id
    }
    console.log(req);
    this.apiservice.addsubcatgoroy1(req).subscribe(
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
