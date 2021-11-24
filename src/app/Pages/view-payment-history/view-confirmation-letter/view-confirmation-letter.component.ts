import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-view-confirmation-letter',
  templateUrl: './view-confirmation-letter.component.html',
  styleUrls: ['./view-confirmation-letter.component.css']
})
export class ViewConfirmationLetterComponent implements OnInit {
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;
  applicationId;
  studentDetails:any=[];
  responselist:any = [];
  courseName;
  courseId;
  courseFeelist:any=[];
  admissionOfficerList:any=[];
  institutelist:any=[];
  institutetype:any = [];
  courseInfo:any=[];
  isNri = false;
  constructor(private activaterouterparams:ActivatedRoute,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.isNri = JSON.parse(localStorage.getItem("isNri"))
    this.activaterouterparams.paramMap.subscribe(
      data =>{
        console.log(data['params'].applicationId);
        this.applicationId=data['params'].applicationId;
        this.getstudnetdetails();
      }
    )
    this.loaddata();
  }
  loaddata()
  {
    this.apiservice.doGetRequest("/institute-types").subscribe(
      data =>{
        console.log(data);
        this.institutetype =data;
      },
      error =>{
        console.log(error);

      }
    )
  }
  gettype(s)
  {
    return this.institutetype.filter(el => el.id === s)
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
        this.courseInfo = data['data'].Institute_Course;
        console.log(this.studentDetails);
        this.getcourseName();

    },
      error =>{

      }
    )
  } 
  download()
  {
    const doc = new jsPDF('p', 'mm', 'a4');

    const pdfTable = this.pdfTable.nativeElement;

    doc.html(pdfTable, {
      callback: function (doc) {
        doc.save('Confirmationletter.pdf');
      },
      margin: [0,0, 0,0],
      html2canvas: { scale: .18 },
    });

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
  onImgError(event) { 
    event.target.src = 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
}
}
