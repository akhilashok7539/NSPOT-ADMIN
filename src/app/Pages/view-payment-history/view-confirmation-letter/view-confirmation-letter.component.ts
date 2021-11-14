import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-confirmation-letter',
  templateUrl: './view-confirmation-letter.component.html',
  styleUrls: ['./view-confirmation-letter.component.css']
})
export class ViewConfirmationLetterComponent implements OnInit {
  // @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;
  applicationId;
  studentDetails:any=[];
  responselist:any = [];
  courseName;
  courseId;
  courseFeelist:any=[];
  admissionOfficerList:any=[];
  institutelist:any=[];
  constructor(private activaterouterparams:ActivatedRoute,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.activaterouterparams.paramMap.subscribe(
      data =>{
        console.log(data['params'].applicationId);
        this.applicationId=data['params'].applicationId;
        this.getstudnetdetails();
      }
    )
  }
  getstudnetdetails()
  {
    this.apiservice.doGetRequest('applicationForm/confirationLetter/'+this.applicationId).subscribe(
      data =>{
        this.responselist =data['data'];
        this.courseId =this.responselist['Institute_Course'].id
        this.studentDetails = JSON.parse(data['data'].formFieldValues)
        this.courseFeelist = data['courseFee'];
        this.admissionOfficerList = data['admissionOfficer'];
        this.institutelist= data['institute'];
        console.log(this.studentDetails);
        this.getcourseName();

    },
      error =>{

      }
    )
  } 
  download()
  {
    // const doc = new jsPDF();

    // const pdfTable = this.pdfTable.nativeElement;

    // doc.html(pdfTable, {
    //   callback: function (doc) {
    //     doc.save('ApplicationForm.pdf');
    //   },
    //   margin: [80,80, 80,80],
    //   html2canvas: { scale: .18 },
    // });

  }

  coursfeedetailsaftercreate(razorpayOrder_id)
  {
    let req = {
      "orderId":razorpayOrder_id
    }
    this.apiservice.doPostRequest('payment/courseFee/order',req).subscribe(
      data =>{
      // this.amounttopaied = data['order'].amount;
      // console.log( this.amounttopaied);
      return data['order'].amount
      
      },
      error =>{

      }
    )
  }
  getcourseName()
  {
    this.apiservice.doGetRequest('institute/course/courseName/'+this.courseId).subscribe(
      data =>{
        this.courseName = data['CourseName']
      }
    )
  }
}