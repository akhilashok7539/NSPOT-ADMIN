import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-otherboards',
  templateUrl: './otherboards.component.html',
  styleUrls: ['./otherboards.component.css']
})
export class OtherboardsComponent implements OnInit {
  boardlist:any=[];
  constructor(private router:Router,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.board();
  }
  addboard()
  {
    this.router.navigate(['/add-otherboard'])
  }
  board()
  {
    this.apiservice.doGetRequest(`otherBoardType/`).subscribe(
      data =>{
        this.boardlist = data['data']
      },
      error =>{

      }
    )
  }
  edit(item)
  {
    sessionStorage.setItem("board",JSON.stringify(item))
    this.router.navigate(['/update-otherboard'])
  }
}
