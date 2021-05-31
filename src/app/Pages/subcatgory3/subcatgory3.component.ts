import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-subcatgory3',
  templateUrl: './subcatgory3.component.html',
  styleUrls: ['./subcatgory3.component.css']
})
export class Subcatgory3Component implements OnInit {
  subcat:any=[];
  catgroryarray:any = [];
  catname;
  constructor(private adminservice:ApiService,private Toaster:ToastrService,private router:Router ) { }
  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("subcat3"));
    this.catname = this.catgroryarray.title;
    this.getallcategorys();
  }
  getallcategorys()
  {
    this.adminservice.getallCategorysbyid3(this.catgroryarray.id).subscribe(
      data =>{
        this.subcat = data['data'];
      },
      error =>{

      }
    )
  }
  addsubcat(s){
    sessionStorage.setItem("subcat4",JSON.stringify(s));
    this.router.navigate(['/subcat4']);
  }
  delete(s)
  {

    this.adminservice.deletecat3(s.id).subscribe(
      data =>{
        this.Toaster.success("Deleted Successfully")
        this.ngOnInit();
      },
      error =>{
        this.Toaster.error("Unable to deleted")
      }
    )
  }
  edit(s)
  {
    sessionStorage.setItem("edit-cat3",JSON.stringify(s))
    this.router.navigate(['/edit-subcat3']);
  }
}
