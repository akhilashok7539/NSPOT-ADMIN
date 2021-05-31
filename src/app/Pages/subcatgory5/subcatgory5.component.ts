import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-subcatgory5',
  templateUrl: './subcatgory5.component.html',
  styleUrls: ['./subcatgory5.component.css']
})
export class Subcatgory5Component implements OnInit {
  subcat:any=[];
  catgroryarray:any = [];
  catname;
  constructor(private adminservice:ApiService,private Toaster:ToastrService,private router:Router ) { }
  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("subcat5"));
    this.catname = this.catgroryarray.title;
    this.getallcategorys();
  }
  getallcategorys()
  {
    this.adminservice.getallCategorysbyid5(this.catgroryarray.id).subscribe(
      data =>{
        this.subcat = data['data'];
      },
      error =>{

      }
    )
  }

  edit(s)
  {
    sessionStorage.setItem("edit-cat5",JSON.stringify(s))
    this.router.navigate(['/edit-subcat5']);
  }
  delete(s)
  {

    this.adminservice.deletecat5(s.id).subscribe(
      data =>{
        this.Toaster.success("Deleted Successfully")
        this.ngOnInit();
      },
      error =>{
        this.Toaster.error("Unable to deleted")
      }
    )
  }
}
