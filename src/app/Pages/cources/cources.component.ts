import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  courses:any=[];
  instituteFilterSelected: any = [];

  instituteFilter:any = [];
  onFilter=0;
  constructor(private apiserive:ApiService) { }

  ngOnInit(): void {
    this.getallcourser();
  }

  getallcourser(){
    let req= 
    {

    }
    this.apiserive.doPostRequest(`/institute/course/filter`,req).subscribe(
      data =>{
        this.courses = data['data']
      }
    )
  }
  oninstituteFilter()
  {

  }
  oninstituteFiltercancel()
  {
    this.onFilter = 0;
  }
  onFilterClick(index) {
    this.onFilter = index;
  

  }
}
