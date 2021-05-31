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
  catarray1:any=[];
  constructor(private apiservice:ApiService,private toaster:ToastrService,
    private router:Router
  
    ) { }

  ngOnInit(): void {
    this.catarray1 = JSON.parse(sessionStorage.getItem("edit-cat1"));
    this.category = this.catarray1['title'];
    this.id = this.catarray1['id'];
    console.log(this.catarray1);
    
  }
  submit(){
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
}
