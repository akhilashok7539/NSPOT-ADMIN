import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-subcatgory4',
  templateUrl: './subcatgory4.component.html',
  styleUrls: ['./subcatgory4.component.css']
})
export class Subcatgory4Component implements OnInit {
  subcat:any=[];
  catgroryarray:any = [];
  catname;
  cat1: any;
  cat2: any;
  cat3: any;
  constructor(private adminservice:ApiService,private Toaster:ToastrService,private router:Router ) { }
  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("subcat4"));
    this.cat1 = JSON.parse(sessionStorage.getItem("Categorys"));
    this.cat2 = JSON.parse(sessionStorage.getItem("subcat2"));
    this.cat3 = JSON.parse(sessionStorage.getItem("subcat3"));
    
    this.catname = this.catgroryarray.title;
    this.getallcategorys();
  }
  getallcategorys()
  {
    this.adminservice.getallCategorysbyid4(this.catgroryarray.id).subscribe(
      data =>{
        this.subcat = data['data'];
      },
      error =>{

      }
    )
  }
  addsubcat(s){
    sessionStorage.setItem("subcat5",JSON.stringify(s));
    this.router.navigate(['/subcat5']);
  }
  delete(s)
  {

    this.adminservice.deletecat4(s.id).subscribe(
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
    sessionStorage.setItem("edit-cat4",JSON.stringify(s))
    this.router.navigate(['/edit-subcat4']);
  }
}
