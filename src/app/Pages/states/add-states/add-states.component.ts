import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-states',
  templateUrl: './add-states.component.html',
  styleUrls: ['./add-states.component.css']
})
export class AddStatesComponent implements OnInit {
  states;

  
  constructor(private apiservice:ApiService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
submit()
{
  let req = {
    state:this.states
  }
  this.apiservice.doPostRequest(`state/create`,req).subscribe(
    data =>{
      this.toaster.success("States Added Successfully")
      this.router.navigate(['/states']);
    }
  )
}

}
