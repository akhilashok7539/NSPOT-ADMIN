import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCategorysComponent } from './edit-categorys/edit-categorys.component';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {
  bankItems:any=[];
  catgroryarray:any = [];
  catname;
  constructor(private adminservice:ApiService,private Toaster:ToastrService,private router:Router,public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("Categorys"));
    this.catname = this.catgroryarray.title;
    this.getallcategorys();

  }
  getallcategorys()
  {
    this.adminservice.getallCategorysbyid(this.catgroryarray.id).subscribe(
      data =>{
        this.bankItems = data['data'];
      },
      error =>{

      }
    )
  }
  delete(s)
  {
    let req = {
      "id":s.id
    }
    this.adminservice.deletecat(s.id).subscribe(
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
    sessionStorage.setItem("subcat2",JSON.stringify(s));
    this.router.navigate(['/subcat2']);
  }
  edit(s){
    // const dialogRef = this.dialog.open(EditCategorysComponent, {
    //   width: '400px',
    //   data: s
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result closed`);
    // });
    sessionStorage.setItem("edit-cat1",JSON.stringify(s))
    this.router.navigate(['/edit-categorys'])
  }
}
