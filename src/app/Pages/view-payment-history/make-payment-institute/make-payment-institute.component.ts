import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
declare var Razorpay: any;
declare var window: Window;
@Component({
  selector: 'app-make-payment-institute',
  templateUrl: './make-payment-institute.component.html',
  styleUrls: ['./make-payment-institute.component.css']
})
export class MakePaymentInstituteComponent implements OnInit {
  rzp1: any;
  amount = 123;
  resposnedata: any = [];
  orderamountlist:any=[];
  createreposneData:any=[];
  constructor(private activateroute: ActivatedRoute,private router:Router,
    private apiservice:ApiService) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(
      data => {
        console.log(data['params']);
        this.resposnedata = data['params'];
      }
    )
    this.createData();
  }

  createData() {
    let req = {
      "applicationId": this.resposnedata['applicationId'],
      "courseId": this.resposnedata['courseId'],
      "InstiuteId": this.resposnedata['instituteId']
    }
    this.apiservice.doPostRequest("payment/institiutePayment/create",req).subscribe(
      data =>{
        console.log(data);
        let dataresponse = data['data']
        this.createreposneData = data['data']
        // this.paymentcoursefeeid = response.id
        this.getfeedetails(dataresponse)
      },
      error =>{

      }
    )
  }
  getfeedetails(dataresponse){
    let req = {
      "orderId":dataresponse.razorpayOrder_id
    }
    this.apiservice.doPostRequest("payment/courseFee/order",req).subscribe(
      data =>{
        this.orderamountlist=data['order'];
      },
      error =>{

      }
    )
  }
  pay() {
    //  var options = {
    //     "key": "rzp_test_g8vPt9nJiYuDMj",
    //     "description": "Course fee for: " + this.courseFeeDetails.Institute_Course.AccademicLevel_Course.title,

    //     "amount":parseInt(totalfeeAmount),
    //     "name": "NSPOT",
    //     "prefill": {
    //       "name": this.studentDetails.firstName + " " + this.studentDetails.middleName + " " + this.studentDetails.lastName,
    //       "email": this.studentDetails.email,
    //       "contact": ""
    //     },
    //     "notes": {
    //       "address": "NSPOT CONSULTANCY SERVICES PRIVATE LIMITED 39/2475-B1, Suite#118 LR Towers, SJRRA 104, S Janatha Rd, Palarivattom, Kochi, Kerala 682025"
    //     },
    //      "currency": "INR",

    //  };

    const that = this;
    var options = {
      "key": "rzp_test_J7wOs0sSPhfvXU",
      "description": "Amount to institute: " + "n",

      "amount": this.orderamountlist.amount,
      "order_id": this.createreposneData.razorpayOrder_id,
      "name": "NSPOT",
      "handler": function (response) {
        console.log(response)
        that.paymentSuccess(response)
      },
      "prefill": {
        "name": "",
        "email": "",
        "contact": ""
      },
      "notes": {
        "address": "NSPOT CONSULTANCY SERVICES PRIVATE LIMITED 39/2475-B1, Suite#118 LR Towers, SJRRA 104, S Janatha Rd, Palarivattom, Kochi, Kerala 682025"
      },
      "currency": "INR",
    };

    console.log(options);
    // this.rzp1 = new (window as any).Razorpay(options)
    this.rzp1 = new Razorpay(options);
    this.rzp1.open();
    this.rzp1.on('payment.failed', function (response) {
      console.log(response);
      this.paymentFailed(response)

    });

    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      that.paymentFailed(response)
    });
  }

  paymentSuccess(successRespose) {
    console.log(successRespose);
    let req = {
      "razorpay_payment_id":successRespose.razorpay_payment_id,
      "razorpay_signature":successRespose.razorpay_signature,
      "paymentsInsituteFeeId":this.createreposneData.id,
      "applicationId":this.resposnedata['applicationId'],
      "paymentCourseFeeId": this.resposnedata['courseId']
    }
    this.apiservice.doPostRequest("payment/institiutePayment/confirm", req).subscribe((returnData: any) => {
      this.router.navigate(['/view-paymenthistory']);
    })

  }
  paymentFailed(failedRespose) {
    console.log(failedRespose);
    let req = {
      "paymentsInstituteFeeId":this.createreposneData.id,
      "reason":failedRespose.reason
      
    }
    this.apiservice.doPostRequest("payment/institiutePayment/cancel", req).subscribe((returnData: any) => {
      this.router.navigate(['/view-paymenthistory']);
    })

  }
}
