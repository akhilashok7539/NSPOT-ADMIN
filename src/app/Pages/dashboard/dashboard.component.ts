import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  desktype:any=[];

  constructor(private adminservice:ApiService,private Toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.getallcategorys();
  }
  getallcategorys()
  {
    this.adminservice.getallCategorys().subscribe(
      data =>{
        this.desktype = data['data'];
      },
      error =>{

      }
    )
  }
  view(s)
  {
    sessionStorage.setItem("Categorys",JSON.stringify(s))
    this.router.navigate(['/categorys']);
  }
  delete(s)
  {
    let req = {
      "id":s.id
    }
    this.adminservice.deletecat(req).subscribe(
      data =>{
        this.Toaster.success("Deleted Successfully")
      },
      error =>{
        this.Toaster.error("Unable to deleted")
      }
    )
  }
}
