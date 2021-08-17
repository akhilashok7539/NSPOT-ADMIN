import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-subcat4',
  templateUrl: './edit-subcat4.component.html',
  styleUrls: ['./edit-subcat4.component.css']
})
export class EditSubcat4Component implements OnInit {

  category;
  id;
  catarray1:any=[];
  constructor(private apiservice:ApiService,private toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.catarray1 = JSON.parse(sessionStorage.getItem("edit-cat4"));
    this.category = this.catarray1['title'];
    this.id = this.catarray1['id'];
    console.log(this.catarray1);
  }
  submit(){
    let req = {
      "title":this.category,
      "id":this.id
    }
    this.apiservice.updatesubcat4(req).subscribe(
      data =>{
        this.router.navigate(['/subcat4']);
        this.toaster.success("Sub-category Updated Successfully");
      },
      error =>{
        this.toaster.error(" Unable to Update Sub-category");

      }
    )
  }

}
