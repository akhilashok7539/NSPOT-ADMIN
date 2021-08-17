import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-categorys',
  templateUrl: './edit-categorys.component.html',
  styleUrls: ['./edit-categorys.component.css']
})
export class EditCategorysComponent implements OnInit {
  category;
  id;
  type;
  catarray1:any=[];
  constructor(private apiservice:ApiService,private toaster:ToastrService,
    private router:Router
  
    ) { }

  ngOnInit(): void {
    this.catarray1 = JSON.parse(sessionStorage.getItem("edit-cat1"));
    this.type = sessionStorage.getItem("type");

    this.category = this.catarray1['title'];
    this.id = this.catarray1['id'];
    console.log(this.catarray1);
    
  }
  submit(){
 
    if(this.type==='Edit Sub Category')
    {
      
      // let req = {
      //   "title":this.category,
      //   "id":this.id
      // }
      // console.log(req);
      // this.apiservice.addsubcatgoroy1(req).subscribe(
      //   data =>{
      //     this.toaster.success("Deks Type Added")
      //     this.category = "";
      //   },
      //   error =>{
      //     this.toaster.error("Unable to Add  Desk Type ")
  
      //   }
      // )
      let req = {
        "title":this.category,
        "id":this.id
      }
      this.apiservice.updatesubcat1(req).subscribe(
        data =>{
          this.toaster.success("Sub-category Updated Successfully");
          this.router.navigate(['/categorys'])
        },
        error =>{
          this.toaster.error(" Unable to Update Sub-category");
  
        }
      )
    }
    else if(this.type==='Edit Institute Type')
    {
      let req ={
        "title":this.category,
        "id":this.catarray1.id
      }
      this.apiservice.doPostRequest(`institute-type/update`,req).subscribe(
        data =>{
          this.toaster.success("Category Type Added")
          this.router.navigate(['/categorys'])

        },
        error =>{
          this.toaster.error("Unable to Add  Category Type ")
  
        }
      )
    }
    else if(this.type==='Edit Category Type')
    {
     
      let req ={
        "title":this.category,
        "id":this.catarray1.id
      }
      this.apiservice.doPostRequest(`institute-categories/update`,req).subscribe(
        data =>{
          this.toaster.success("Institute Category  Added")
          this.router.navigate(['/categorys'])

        },
        error =>{
          this.toaster.error("Unable to Add Institute Category  ")
  
        }
      )
    }

  }
}
