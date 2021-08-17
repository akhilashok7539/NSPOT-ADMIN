import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-subcat3',
  templateUrl: './add-subcat3.component.html',
  styleUrls: ['./add-subcat3.component.css']
})
export class AddSubcat3Component implements OnInit {
  category;
  catgroryarray:any = [];
  catname;
  constructor(private apiservice:ApiService,private Toaster:ToastrService) { }

  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("subcat3"));
    this.catname = this.catgroryarray.title;
  }
  submit(){
    let req ={
      "title":this.category,
      "CourseSubCategories2Id":this.catgroryarray.id
    }
    console.log(req);
    this.apiservice.addsubcatgoroy3(req).subscribe(
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
