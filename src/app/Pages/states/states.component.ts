import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  stateList:any=[];
  constructor(private router:Router,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.loadstates();
  }
  adddstate()
  {
    this.router.navigate(['/add-states'])
  }
  loadstates()
  {
    this.apiservice.doGetRequest(`state/`).subscribe(
      data =>{
        this.stateList = data['data']
      },
      error =>{

      }
    )
  }
 
}
