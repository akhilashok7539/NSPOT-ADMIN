import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-subcatgory2',
  templateUrl: './subcatgory2.component.html',
  styleUrls: ['./subcatgory2.component.css']
})
export class Subcatgory2Component implements OnInit {
  subcat:any=[];
  catgroryarray:any = [];
  cat1:any = [];
  catname;
  category;
  constructor(private adminservice:ApiService,private Toaster:ToastrService,private router:Router ) { }
  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("subcat2"));
    this.cat1 = JSON.parse(sessionStorage.getItem("Categorys"));
    this.catname = this.catgroryarray.title;
    this.category = this.cat1.title;
    this.getallcategorys();
  }
  getallcategorys()
  {
    this.adminservice.getallCategorysbyid2(this.catgroryarray.id).subscribe(
      data =>{
        this.subcat = data['data'];
      },
      error =>{

      }
    )
  }
  delete(s)
  {

    this.adminservice.deletecat2(s.id).subscribe(
      data =>{
        this.Toaster.success("Deleted Successfully")
        this.ngOnInit();
      },
      error =>{
        this.Toaster.error("Unable to deleted")
      }
    )
  }
  addsubcat(s){
    sessionStorage.setItem("subcat3",JSON.stringify(s));
    this.router.navigate(['/subcat3']);
  }
  edit(s)
  {
    sessionStorage.setItem("edit-cat2",JSON.stringify(s))
    this.router.navigate(['/edit-subcat2']);
  }
}
