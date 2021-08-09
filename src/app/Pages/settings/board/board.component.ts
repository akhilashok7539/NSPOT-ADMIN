import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boardlist:any=[];
  constructor(private router:Router,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.board();
  }
  addboard()
  {
    this.router.navigate(['/add-board'])
  }
  board()
  {
    this.apiservice.doGetRequest(`boardType/`).subscribe(
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
    this.router.navigate(['/update-board'])
  }

}
