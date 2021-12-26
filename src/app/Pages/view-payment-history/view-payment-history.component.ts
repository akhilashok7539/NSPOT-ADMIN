import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-payment-history',
  templateUrl: './view-payment-history.component.html',
  styleUrls: ['./view-payment-history.component.css'],
  
})
export class ViewPaymentHistoryComponent implements OnInit {
  courseslist: any = [];
  instituteFilterSelected: any = [];
  courslistupdated: any = [];
  instituteFilter: any = [];
  onFilter = 0;
  constructor(private apiserive: ApiService, private toaster: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getallcourser();
  }

  getallcourser() {

    let req ={

    }
    this.apiserive.doPostRequest(`payment/courseFee/admin`,req).subscribe(
      data => {
        this.courseslist = data['result']
        // console.log(this.courseslist);
        for (let i = 0; i < this.courseslist.length; i++) {
          if (this.courseslist[i]['item'].status === "paid") {
            this.courslistupdated.push(this.courseslist[i])
          }
        }
        console.log(this.courslistupdated);

      }
    )
  }
  oninstituteFilter() {

  }
  oninstituteFiltercancel() {
    this.onFilter = 0;
  }
  onFilterClick(index) {
    this.onFilter = index;


  }
  selectedDate(s)
  {
    let req ={
      addedDate:s.target.value
    }
    this.apiserive.doPostRequest(`payment/courseFee/admin`,req).subscribe(
      data => {
        this.courslistupdated =[];
        this.courseslist = data['result']
        // console.log(this.courseslist);
        for (let i = 0; i < this.courseslist.length; i++) {
          if (this.courseslist[i]['item'].status === "paid") {
            this.courslistupdated.push(this.courseslist[i])
          }
        }
        console.log(this.courslistupdated);

      }
    )
  }
  getcoursename(id) {
    //  this.apiserive.doGetRequest("institute/course/courseName/"+id).subscribe(
    //   data =>{
    //      data['CourseName']
    //   }
    // )
  }
  viewcourse(s) {
    // let courseid = s.course
    // let coursename;
    // this.router.navigate(['/view-coursedetails/' + id + "/course name"]);
    // if (s.course != null) {
    //   if (s.course.Course_Sub_Categories5 === null) {
    //    if (s.course.Course_Sub_Categories4 === null) {
    //      if (s.course.Course_Sub_Categories3 === null) {
    //        if (s.course.Course_Sub_Categories2 === null) {
    //        }
    //        else {
    //          return coursename = s.course.Course_Sub_Categories2['title']
    //        }
    //      }
    //      else {
    //        return coursename =  s.course.Course_Sub_Categories3['title']
    //      }
    //    }
    //    else {
    //      return coursename =  s.course.Course_Sub_Categories4['title']
    //    }
    //  }
    //  else {
    //    return coursename =  s.course.Course_Sub_Categories5['title']
    //  }
    //  }
    //  else {
    //    return coursename =  "No course found!"
    //  }
    //  console.log(courseid);
    //  console.log(coursename);
    this.router.navigate(['/view-coursedetails/' + s.course['id'] + "/"+this.getcourseName(s)]);

     
  }
  getcourseName(s) {
    // console.log(s.course);
    if (s.course != null) {
     if (s.course.Course_Sub_Categories5 === null) {
      if (s.course.Course_Sub_Categories4 === null) {
        if (s.course.Course_Sub_Categories3 === null) {
          if (s.course.Course_Sub_Categories2 === null) {
          }
          else {
            return s.course.Course_Sub_Categories2['title']
          }
        }
        else {
          return s.course.Course_Sub_Categories3['title']
        }
      }
      else {
        return s.course.Course_Sub_Categories4['title']
      }
    }
    else {
      return s.course.Course_Sub_Categories5['title']
    }
    }
    else {
      return "No course found!"
    }
    // if (s.Course_Sub_Categories5 === null) {
    //   if (s.Course_Sub_Categories4 === null) {
    //     if (s.Course_Sub_Categories3 === null) {
    //       if (s.Course_Sub_Categories2 === null) {
    //       }
    //       else {
    //         return s.Course_Sub_Categories2['title']
    //       }
    //     }
    //     else {
    //       return s.Course_Sub_Categories3['title']
    //     }
    //   }
    //   else {
    //     return s.Course_Sub_Categories4['title']
    //   }
    // }
    // else {
    //   return s.Course_Sub_Categories5['title']
    // }
  }
  getinstituteName(s)
  {
    
      if (s.course != null) {
      console.log(s.course.Institute.name);
        return s.course.Institute.name;
      } 
      else{
      return "No Institute found!"

      }
  }
  viewRecipt(view)
  {
    // console.log(view.item.transactionRecipt);
    if(view.item.transactionRecipt)
    {
      window.open(" https://nspot-qa.herokuapp.com/"+view.item.transactionRecipt,"_blank")

    }
    else{
      this.toaster.error("No recipt is uploaded")
    }
    
  }
  uploadRecipt(item)
  {
    this.router.navigate(['/upload-recipt/'+item.item.id]);
  }
  makePayment(item)
  {
    console.log(item);
    let applicationID = item?.item?.applicationId;
    let courseId= item?.course?.id;
    let instituteid =item?.course?.Institute?.id;
    this.router.navigate(['/checkout-payment/'+applicationID+'/'+courseId+'/'+instituteid])
    // checkout-payment/:applicationId/:courseId/:studentId
  }
}
