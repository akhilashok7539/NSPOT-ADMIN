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
  type;
  constructor(private apiservice:ApiService,private Toaster:ToastrService) { }

  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("Categorys"));
    this.type = sessionStorage.getItem("type");

    this.catname = this.catgroryarray.title;
  }
  submit(){
    if(this.type==='Add Sub Category')
    {
      console.log('1s');
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
    else if(this.type==='Add Institute Type')
    {
      let req ={
        "title":this.category,
        "courseCatagoryId":this.catgroryarray.id
      }
      this.apiservice.doPostRequest(`institute-type/create`,req).subscribe(
        data =>{
          this.Toaster.success("Institute Type Added")
          this.category = "";
        },
        error =>{
          this.Toaster.error("Unable to Add  Institute Type ")
  
        }
      )
    }
    else if(this.type==='Add Category Type')
    {
     
      let req ={
        "title":this.category,
        "courseCatagoryId":this.catgroryarray.id
      }
      this.apiservice.doPostRequest(`institute-categories/create`,req).subscribe(
        data =>{
          this.Toaster.success("Institute Category Added")
          this.category = "";
        },
        error =>{
          this.Toaster.error("Unable to Add  Category Type ")
  
        }
      )
    }
 
   
  }
}
