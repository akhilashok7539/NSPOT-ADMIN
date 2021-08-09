import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-otherboard',
  templateUrl: './add-otherboard.component.html',
  styleUrls: ['./add-otherboard.component.css']
})
export class AddOtherboardComponent implements OnInit {

  university;

  constructor(private apiservice: ApiService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.university);

    if (this.university === undefined) {
      this.toaster.error("Please enter board name");

    }
    else {
      let req = {
        title: this.university
      }
      this.apiservice.doPostRequest(`otherBoardType/create`, req).subscribe(
        data => {
          this.toaster.success("Board Added Successfully")
          this.router.navigate(['/other-board']);

        }
      )
      // this.toaster.success("Board Added Successfully")

    }

  }
}