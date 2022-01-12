import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-state',
  templateUrl: './edit-state.component.html',
  styleUrls: ['./edit-state.component.css']
})
export class EditStateComponent implements OnInit {

  states;
  stateArray=[];
  
  constructor(private apiservice:ApiService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.stateArray = JSON.parse(sessionStorage.getItem("stateArray"))
    this.states = this.stateArray['state']
  }
submit()
{
  let req = {
    id:this.stateArray['id'],
    state:this.states
  }
  this.apiservice.doPutRequest(`state/update`,req).subscribe(
    data =>{
      this.toaster.success("States Updated Successfully")
      this.router.navigate(['/states']);
    }
  )
}

}
