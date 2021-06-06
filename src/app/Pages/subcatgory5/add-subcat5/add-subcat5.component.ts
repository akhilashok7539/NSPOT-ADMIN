import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-subcat5',
  templateUrl: './add-subcat5.component.html',
  styleUrls: ['./add-subcat5.component.css']
})
export class AddSubcat5Component implements OnInit {
  category;
  catgroryarray:any = [];
  catname;
  constructor(private apiservice:ApiService,private Toaster:ToastrService) { }

  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("subcat5"));
    this.catname = this.catgroryarray.title;
  }
  submit(){
    let req ={
      "title":this.category,
      "CourseSubCategories4Id":this.catgroryarray.id
    }
    console.log(req);
    this.apiservice.addsubcatgoroy5(req).subscribe(
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
