import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() onCancel = new EventEmitter<any>();
  @Output() onSubmitFIlter = new EventEmitter<any>();
  @Output() onSearch = new EventEmitter<any>();
  @Input() filterArrayDetail;
  constructor() { }

  ngOnInit(): void {
  }
  closeFIlterDropdown(event){
    console.log('s');
    
    this.onCancel.emit(this.filterArrayDetail)
  }
  onSubmitDateFIlterClick()
  {
    
  }
}
