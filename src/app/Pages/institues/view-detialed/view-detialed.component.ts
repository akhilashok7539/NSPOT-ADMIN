import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { endPoints } from 'src/app/config/endPoints';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-detialed',
  templateUrl: './view-detialed.component.html',
  styleUrls: ['./view-detialed.component.css']
})
export class ViewDetialedComponent implements OnInit {
  instituteId ;
  instituteInfo;
  boardOfCouncilInfo;
  highlights;
  socialLinks;
  coursesOffered;
  gallery;
  baseApiUrl = environment.baseApiUrl;

  constructor(private activaterouter:ActivatedRoute,private apiService:ApiService,private toastr:ToastrService) { 
    this.activaterouter.paramMap.subscribe(params => {
      console.log(params['params'].id);
      this.instituteId =params['params'].id;
    })
  }

  ngOnInit(): void {
    this.apiService.doGetRequest(endPoints.GetInstituteInfo + this.instituteId + "?filter[include]=LicenceIssueAuthority").subscribe((returnData: any) => {
      console.log("Institute Info",returnData)
      this.instituteInfo = returnData.data;
      console.log(this.instituteInfo);
      
    }, error => {
      console.error(error);
      this.toastr.error('Failed to fetch institute details')
    });

    // fetching boardof council details
    this.apiService.doGetRequest(endPoints.Get_boardOfCouncil + this.instituteId).subscribe((returnData: any) => {
      this.boardOfCouncilInfo = returnData.data;
      console.log(this.boardOfCouncilInfo);
    }, error => {
      console.error(error);
      this.toastr.error('Failed to fetch institute details');
    });

    // fetching highlights
    this.apiService.doGetRequest(endPoints.Get_highlights + this.instituteId).subscribe((returnData: any) => {
      this.highlights = returnData.data;
      console.log("highligts", this.highlights)
      
    }, error => {
      console.error(error);
      this.toastr.error('Failed to fetch institute details')
    });

    // fetching social links
    this.apiService.doGetRequest(endPoints.Get_socialMedia + this.instituteId).subscribe((returnData: any) => {
      this.socialLinks = returnData.data;
      console.log("socialLinks", this.socialLinks)

    }, error => {
      console.error(error);
      this.toastr.error('Failed to fetch institute details')
    });

    // fetching coureses offered by the college
    this.apiService.doGetRequest(
    `/institute/courses/` + this.instituteId


    ).subscribe((returnData: any) => {
      this.coursesOffered = returnData.data;
      console.log("courses", this.coursesOffered)
    }, error => {
      console.error(error);
      this.toastr.error('Failed to fetch institute details')
    });

    // fetching gallery
    this.apiService.doGetRequest(endPoints.Get_gallery + this.instituteId).subscribe((returnData: any) => {
      this.gallery = returnData.data;
    }, error => {
      console.error(error);
      this.toastr.error('Failed to fetch institute details')
    });
  }

}
