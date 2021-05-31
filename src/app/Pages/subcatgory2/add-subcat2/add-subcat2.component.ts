import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-subcat2',
  templateUrl: './add-subcat2.component.html',
  styleUrls: ['./add-subcat2.component.css']
})
export class AddSubcat2Component implements OnInit {
  category;
  catgroryarray:any = [];
  catname;
  constructor(private apiservice:ApiService,private Toaster:ToastrService) { }

  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("subcat2"));
    this.catname = this.catgroryarray.title;
  }
  submit(){
    let req ={
      "title":this.category,
      "CourseSubCategoryId":this.catgroryarray.id
    }
    console.log(req);
    this.apiservice.addsubcatgoroy2(req).subscribe(
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
