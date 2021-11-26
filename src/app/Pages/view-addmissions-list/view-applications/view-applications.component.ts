import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {
  instituteId;
  applciationId;
  instituteDetailed:any=[];
  applicationDetailed:any=[];
  appttitudetestdetails:any=[];
  applicationId;
  applicationData;
  personalInfo = new Array();
  permanentAddress = new Array();
  communicationAddress = new Array();
  education = new Array();
  entrance = new Array();
  certificates = new Array();
  instituteInfo;
  personalInfoKeys = {}
  personalinfomationDetaiedmasked :any = [];
  permanentAddressKeys = {}
  communicationAddressKeys = {}
  educationKeys = new Array()
  entranceKeys = new Array()
  certificatesKeys = {}
  collegeadmisionIdStudent;
  touched = false;
  applicationstatus;
  studentsignatureFile;
  mothersSignatureFile;
  fathersSignatureFile;
  guardiansSignatureFile;
  studentDetailedlist:any=[];
  constructor(private apiservice:ApiService,private activaterouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activaterouter.paramMap.subscribe(
      data =>{
        console.log(data);
        this.instituteId = data['params']['instituteId']
        this.applciationId = data['params']['id'];
        this.loadData()
      }
    )


  }
  loadData()
  {
    this.apiservice.doGetRequest("institute/"+this.instituteId).subscribe(
      data =>{
          this.instituteDetailed = data['data']
      },
      error =>{
        
      }
    )
    // files application
    this.apiservice.doGetRequest("applicationForm/applications/files/"+this.applciationId).subscribe(
      data =>{
        console.log(data);
        this.guardiansSignatureFile = data['data']['guardiansSignatureFile']
        this.fathersSignatureFile = data['data']['fathersSignatureFile']
        this.mothersSignatureFile = data['data']['mothersSignatureFile']
        this.studentsignatureFile = data['data']['signatureFile']

      },
      error =>{

      }
    )


    this.apiservice.doGetRequest("applicationForm/applications?where[id]="+this.applciationId).subscribe
      ((returnData: any) =>{
        this.applicationDetailed = returnData['data']
        this.studentDetailedlist = returnData['data'][0]['student'];
        this.applicationData = returnData.data[0].item;
        this.collegeadmisionIdStudent = returnData['data'][0]['item'].admissionId;
        console.log(this.collegeadmisionIdStudent);
        
        this.applicationstatus = this.applicationData['applicationStatus'];
        console.log(this.applicationstatus);
     
  
        const formData = JSON.parse(this.applicationData.formFieldValues)
        let  personalInfo = formData.personalInfo
        console.log("Personal Info",personalInfo);
        // // personalInfo.map(x => x.mothersPhoneNumber = "masked data"
        // )
       
        if(this.applicationstatus === "pre-application-applied")
        {
        this.personalinfomationDetaiedmasked.push(personalInfo);
        this.personalinfomationDetaiedmasked.map(x =>  x.mothersPhoneNumber = "+91*********************************02")
        this.personalinfomationDetaiedmasked.map(x =>  x.fathersPhoneNumber = "+91*********************************09")
        this.personalinfomationDetaiedmasked.map(x =>  x.fathersEmail = "****************************************@gmail.com")
        this.personalinfomationDetaiedmasked.map(x =>  x.gaurdiansEmail = "****************************************@gmail.com")
        this.personalinfomationDetaiedmasked.map(x =>  x.gaurdiansPhoneNumber = "+91*********************************19")
        this.personalinfomationDetaiedmasked.map(x =>  x.mothersEmail = "****************************************@gmail.com")
        // this.personalinfomationDetaiedmasked.map(x =>  x.fathersEmail = "****************************************")
        console.log("Personal masked = ",this.personalinfomationDetaiedmasked);
        personalInfo = this.personalinfomationDetaiedmasked[0]
        console.log(this.personalInfo)
        }
  
  
        let i = 0;
        for (let property in personalInfo) {
          if (property == 'additionalFields') {
            for (let item in personalInfo[property]) {
              this.personalInfo.push(personalInfo[property][item])
              this.personalInfoKeys[i] = item
              i++;
            }
          } else {
            this.personalInfo.push(personalInfo[property])
            this.personalInfoKeys[i] = property
            i++;
          }
        }
        // setting permanent address
        i = 0;
        for (let property in formData.permanentAddress) {
          if (property == 'additionalFields') {
            for (let item in formData.permanentAddress[property]) {
              this.permanentAddress.push(formData.permanentAddress[property][item])
              this.permanentAddressKeys[i] = item
              i++;
            }
          } else {
            this.permanentAddress.push(formData.permanentAddress[property])
            this.permanentAddressKeys[i] = property
            i++;
          }
        }
  
        // setting communication address
        i = 0;
        for (let property in formData.communicationAddress) {
          if (property == 'additionalFields') {
            for (let item in formData.communicationAddress[property]) {
              this.communicationAddress.push(formData.communicationAddress[property][item])
              this.communicationAddressKeys[i] = item
              i++;
            }
          } else {
            this.communicationAddress.push(formData.communicationAddress[property])
            this.communicationAddressKeys[i] = property
            i++;
          }
        }
  
        /**
         * Setting educations
         */
  
        // iterating through educations
        for (let j = 0; j < formData.education.length; j++) {
          i = 0;
          let educationFields = new Array();
          // iterating through each item in an education
          for (let property in formData.education[j]) {
            if (property == 'additionalFields') {
              for (let item in formData.education[j][property]) {
                educationFields.push(formData.education[j][property][item])
                if (this.educationKeys[j])
                  this.educationKeys[j][i] = item
                else {
                  let im = { "0": item }
                  this.educationKeys.push(im)
                }
  
                i++;
              }
            } else {
              educationFields.push(formData.education[j][property])
              // console.log(j, i, property, formData.education[j][property])
              if (this.educationKeys[j])
                this.educationKeys[j][i] = property
              else {
                let im = { "0": property }
                this.educationKeys.push(im)
              }
              i++;
            }
          }
          this.education.push(educationFields)
        }
  
        // -------------------------------------------------
        /**
         * Setting entrance exams
         */
  
        // iterating through entrance exams
        for (let j = 0; j < formData.entrance.length; j++) {
          i = 0;
          let entranceFields = new Array();
          // iterating through each item in an entrance
          for (let property in formData.entrance[j]) {
            if (property == 'additionalFields') {
              for (let item in formData.entrance[j][property]) {
                entranceFields.push(formData.entrance[j][property][item])
                // console.log(j, i, property, formData.entrance[j][property])
                if (this.entranceKeys[j])
                  this.entranceKeys[j][i] = item
                else {
                  let im = { "0": item }
                  this.entranceKeys.push(im)
                }
  
                i++;
              }
            } else {
              entranceFields.push(formData.entrance[j][property])
              // console.log(j, i, property, formData.entrance[j][property])
              if (this.entranceKeys[j])
                this.entranceKeys[j][i] = property
              else {
                let im = { "0": property }
                this.entranceKeys.push(im)
              }
              i++;
            }
          }
          this.entrance.push(entranceFields)
        }
  
  
        // setting certificates
        i = 0;
        for (let property in formData.certificates) {
          if (property == 'additionalFields') {
            for (let item in formData.certificates[property]) {
              this.certificates.push(formData.certificates[property][item])
              this.certificatesKeys[i] = item
              i++;
            }
          } else {
            this.certificates.push(formData.certificates[property])
            this.certificatesKeys[i] = property
            i++;
          }
        }
      });
      console.log(this.applicationData);
      


    
  }
  getcurrentyear(){
    let currentYear;
    return currentYear=new Date().getFullYear();
  
  }
  insertSpaces(string) {
    string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    return string;
}
  onImgError(event) { 
    event.target.src = 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
}
}
