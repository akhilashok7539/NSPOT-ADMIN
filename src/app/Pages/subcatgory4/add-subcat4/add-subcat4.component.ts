import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-subcat4',
  templateUrl: './add-subcat4.component.html',
  styleUrls: ['./add-subcat4.component.css']
})
export class AddSubcat4Component implements OnInit {
  category;
  catgroryarray:any = [];
  catname;
  constructor(private apiservice:ApiService,private Toaster:ToastrService) { }

  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("subcat4"));
    this.catname = this.catgroryarray.title;
  }
  submit(){
    let req ={
      "title":this.category,
      "CourseSubCategories3Id":this.catgroryarray.id
    }
    console.log(req);
    this.apiservice.addsubcatgoroy4(req).subscribe(
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
