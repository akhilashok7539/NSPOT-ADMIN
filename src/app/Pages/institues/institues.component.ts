import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-institues',
  templateUrl: './institues.component.html',
  styleUrls: ['./institues.component.css']
})
export class InstituesComponent implements OnInit {

  institutes:any = [];
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.getallinstitues();
  }
  
  getallinstitues()
  {
    this.apiservice.getallInstitutes().subscribe(
      data =>{
        console.log(data);
        this.institutes = data['data']
      },
      error =>{


      }
    )
  }
}
