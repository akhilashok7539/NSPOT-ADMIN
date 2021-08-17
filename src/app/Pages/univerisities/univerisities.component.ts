import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-univerisities',
  templateUrl: './univerisities.component.html',
  styleUrls: ['./univerisities.component.css']
})
export class UniverisitiesComponent implements OnInit {
  universityList:any=[];
  constructor(private router:Router,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.university();
  }
  adduniversity()
  {
    this.router.navigate(['/add-University'])
  }
  university()
  {
    this.apiservice.doGetRequest(`university/`).subscribe(
      data =>{
        this.universityList = data['data']
      },
      error =>{

      }
    )
  }
  edit(item)
  {
    sessionStorage.setItem("univerisity",JSON.stringify(item))
    this.router.navigate(['/edit-University'])
  }

}
