import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upload-receipt',
  templateUrl: './upload-receipt.component.html',
  styleUrls: ['./upload-receipt.component.css']
})
export class UploadReceiptComponent implements OnInit {
  file;
// :FormData;
formdata: FormData = new FormData();
applicationid;
  constructor(private apiservices:ApiService,private toaster:ToastrService,private activaterouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activaterouter.paramMap.subscribe(
      data =>{
        this.applicationid = data['params'].id
      }
    )
  }
  uploadRecipt(event)
  {
    console.log(event.target.files[0]);
    this.file=event.target.files[0]
  }
  submit()
  {
    if(this.file)
    {
      this.formdata.append("transactionReciptAdmin",this.file);
      this.apiservices.doPutRequest_upload("payment/recipt/admin/"+this.applicationid,this.formdata).subscribe(
        data =>{
          this.toaster.success("file uploaded sucessfully")
          this.router.navigate(['/view-paymenthistory'])

        },
        error=>{
      this.toaster.error("Unable to upload file")

        }
      )
    }
    else{
      this.toaster.error("Please choose a file")
    }
  }
}
