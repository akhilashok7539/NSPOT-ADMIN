import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentList:any=[];
  constructor(private apiservice:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.loadapis();
  }


  loadapis(){
    this.apiservice.doGetRequest("student").subscribe(
      data =>{
          console.log(data);
          this.studentList = data['data'];
      },  
      error =>{

      }
    )
  }
  view(s)
  {
    console.log(s);
    this.router.navigate(['/student/'+s.id+'/'+s.firstName+''+s.middleName+''+s.lastName])
    // student
  }
  getbydate(s)
  {
    let date = s.target.value;
    console.log(date);
    this.apiservice.doGetRequest("student/byDate/"+date).subscribe(
      data =>{
          console.log(data);
          this.studentList = data['data'];
      },  
      error =>{

      }
    )
  }
}
