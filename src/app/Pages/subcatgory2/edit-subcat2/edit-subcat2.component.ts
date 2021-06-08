import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-subcat2',
  templateUrl: './edit-subcat2.component.html',
  styleUrls: ['./edit-subcat2.component.css']
})
export class EditSubcat2Component implements OnInit {
  category;
  id;
  catarray1:any=[];
  constructor(private apiservice:ApiService,private toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.catarray1 = JSON.parse(sessionStorage.getItem("edit-cat2"));
    this.category = this.catarray1['title'];
    this.id = this.catarray1['id'];
    console.log(this.catarray1);
  }
  submit(){
    let req = {
      "title":this.category,
      "id":this.id
    }
    this.apiservice.updatesubcat2(req).subscribe(
      data =>{
        this.router.navigate(['/subcat2']);
        this.toaster.success("Sub-category Updated Successfully");
      },
      error =>{
        this.toaster.error(" Unable to Update Sub-category");

      }
    )
  }
}
