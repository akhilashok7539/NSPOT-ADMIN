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
  categoryitems: any = [];
  catgroryarray: any = [];
  catname;
  buttonlabel = "Add Sub Category";
  constructor(private adminservice: ApiService, private Toaster: ToastrService, private router: Router, public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.catgroryarray = JSON.parse(sessionStorage.getItem("Categorys"));
    this.catname = this.catgroryarray.title;
    this.getallcategorys();

  }
  getallcategorys() {
    if (this.buttonlabel === "Add Sub Category") 
    {
      this.adminservice.getallCategorysbyid(this.catgroryarray.id).subscribe(
        data => {
          this.categoryitems = data['data'];
        },
        error => {
  
        }
      )
    }
    else if (this.buttonlabel === "Add Institute Type") {
      this.adminservice.doGetRequest(`institute-type/courseCatagory/`+this.catgroryarray.id).subscribe(
        data => {
          this.categoryitems = data['data'];
        },
        error => {
  
        }
      )
    }
    else if (this.buttonlabel === "Add Category Type") {
      this.adminservice.doGetRequest(`institute-categories/courseCatagory/`+this.catgroryarray.id).subscribe(
        data => {
          this.categoryitems = data['data'];
        },
        error => {
  
        }
      )
    }
  
  }
  delete(s) {

    
    if (this.buttonlabel === "Add Sub Category") {
      let req = {
        "id": s.id
      }
      this.adminservice.deletecat(s.id).subscribe(
        data => {
          this.Toaster.success("Deleted Successfully")
          this.ngOnInit();
        },
        error => {
          this.Toaster.error("Unable to deleted")
        }
      )
    }
    else if (this.buttonlabel === "Add Institute Type") {
      // sessionStorage.setItem("type", "Edit Institute Type");
      // sessionStorage.setItem("edit-cat1", JSON.stringify(s))
      // this.router.navigate(['/edit-categorys'])
    }
    else if (this.buttonlabel === "Add Category Type") {
      let req = {
        "id": s.id
      }
      this.adminservice.dodeleteRequest(`institute-categories/delete/`+s.id,req).subscribe(
        data => {
          this.Toaster.success("Deleted Successfully")
          this.ngOnInit();
        },
        error => {
          this.Toaster.error("Unable to deleted")
        }
      )
    }


  }
  addsubcat(s) {
    sessionStorage.setItem("subcat2", JSON.stringify(s));
    this.router.navigate(['/subcat2']);
  }
  edit(s) {
    // const dialogRef = this.dialog.open(EditCategorysComponent, {
    //   width: '400px',
    //   data: s
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result closed`);
    // });
   
    if (this.buttonlabel === "Add Sub Category") {
      sessionStorage.setItem("type", "Edit Sub Category");
      sessionStorage.setItem("edit-cat1", JSON.stringify(s))
      this.router.navigate(['/edit-categorys'])
    }
    else if (this.buttonlabel === "Add Institute Type") {
      sessionStorage.setItem("type", "Edit Institute Type");
      sessionStorage.setItem("edit-cat1", JSON.stringify(s))
      this.router.navigate(['/edit-categorys'])
    }
    else if (this.buttonlabel === "Add Category Type") {
      sessionStorage.setItem("type", "Edit Category Type");
      sessionStorage.setItem("edit-cat1", JSON.stringify(s))
    this.router.navigate(['/edit-categorys'])
    }
  }
  tabChanged(type) {
    console.log(type.index);
    console.log(type);
    if (type.index === 0) {
      this.buttonlabel = "Add Sub Category";
      // routerLink="/add-newdesk"
      this.getallcategorys();

    }
    else if (type.index === 1) {
      this.buttonlabel = "Add Institute Type";
      this.getallcategorys();

    }
    else if (type.index === 2) {
      this.buttonlabel = "Add Category Type";
      this.getallcategorys();

    }

  }
  addSubcatList() {
    if (this.buttonlabel === "Add Sub Category") {
      sessionStorage.setItem("type", "Add Sub Category");
      this.router.navigate(['/add-newdesk'])
    }
    else if (this.buttonlabel === "Add Institute Type") {
      sessionStorage.setItem("type", "Add Institute Type");
      this.router.navigate(['/add-newdesk'])
    }
    else if (this.buttonlabel === "Add Category Type") {
      sessionStorage.setItem("type", "Add Category Type");
      this.router.navigate(['/add-newdesk'])
    }
  }
}
