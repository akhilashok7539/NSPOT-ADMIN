import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { endPoints } from '../../config/endPoints';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bank-management',
  templateUrl: './bank-management.component.html',
  styleUrls: ['./bank-management.component.css']
})
export class BankManagementComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private toastr: ToastrService,
    private cd: ChangeDetectorRef
  ) { }

  form: FormGroup;
  touched = false;
  bankItems;
  eidtMode = false;

  ngOnInit(): void {
    this.loadData();
    this.form = this.formBuilder.group({
      id: [''],
      accountNumber: [''],
      name: [''],
      ifsc: [''],
      razorpay_linkedAccount_id: ['']
    });
  }

  // loading bank details
  loadData(): void {
    this.apiService.doGetRequest(endPoints.Get_banks + "?order[0][0]=id&order[0][1]=DESC").subscribe((returnData: any) => {
      this.bankItems = returnData.data;
      console.log(this.bankItems);
    });
  }

  edit(item) {
    this.form.reset();
    this.eidtMode = true;
    this.form.controls.id.setValue(item.id)
    this.form.controls.accountNumber.setValue(item.accountNumber)
    this.form.controls.name.setValue(item.name)
    this.form.controls.ifsc.setValue(item.ifsc)
    this.form.controls.razorpay_linkedAccount_id.setValue(item.razorpay_linkedAccount_id)
  }

  // submitting the multipart data to the api
  onSubmit(): void {
    this.touched = true;
    if (this.form.invalid) {
      return;
    } else {
      (document.querySelector('#submit-btn') as HTMLInputElement).setAttribute('disabled', '');
    }
    const formData = this.form.value;
    console.log(formData)

    this.apiService.doPostRequest_upload(endPoints.Update_bankDetails, formData)
      .subscribe((returnData: any) => {
        console.log(returnData);
        this.toastr.success('Bank details updated successfully.');
        (document.querySelector('#submit-btn') as HTMLInputElement).removeAttribute('disabled');
        this.form.reset();
        this.loadData();
        this.eidtMode = false;
      },
        error => {
          console.error(error);
          (document.querySelector('#submit-btn') as HTMLInputElement).removeAttribute('disabled');
          const message = error.error ? error.error[0].message : "Something went wrong please try again later."
          this.toastr.error(message);
        });


  }
  get f() { return this.form.controls; }
}

