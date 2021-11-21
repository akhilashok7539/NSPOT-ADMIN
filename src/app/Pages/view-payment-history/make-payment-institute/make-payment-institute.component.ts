import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
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
      "description": "Course fee for: " + "n",

      "amount": this.amount * 100,
      // "order_id": "adsdasdasdasdsad",
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
    

  }
  paymentFailed(failedRespose) {

  }
}
