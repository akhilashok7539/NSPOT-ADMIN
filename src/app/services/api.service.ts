/**
 * Service - API services
 * This service deals with the api calls and returns the API response
 * @author : deepu TG | deeputg1992@gmail.com
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { endPoints } from '../config/endPoints';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpOptions: any;
  public accessToken: string;
  public userLogedIn;

  SERVER_URL = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) {
    this.setHttpOptions();
  }


  /**
   * sets the http header
   * Authorization header setup in the case of loged in user
   * @param : nil
   * @returns : void
   */
  setHttpOptions(): void {
    this.userLogedIn = JSON.parse(sessionStorage.getItem('userLogin'));
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (this.userLogedIn != null) {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userLogedIn.token
      });
    }

    this.httpOptions = { headers };
  }

  // general get service
  public doGetRequest(url: any) {
    return this.http.get<any>(this.SERVER_URL + url, this.httpOptions).pipe(
      map((response) => {
        return response;
      }),
    );
  }

  // general post service
  public doPostRequest(url: any, data: any) {
    return this.http.post<any>(this.SERVER_URL + url, data, this.httpOptions).pipe(
      map((response) => {
        return response;
      }),
    );
  }
  public doPutRequest(url: any, data: any){
    return this.http.put<any>(this.SERVER_URL + url, data, this.httpOptions).pipe(
      map((response) => {
        return response;
      }),
    );
  }
  // delete
  public dodeleteRequest(url: any, data: any){
    return this.http.delete<any>(this.SERVER_URL + url, data).pipe(
      map((response) => {
        return response;
      }),
    );
  }
  public doPostRequest_upload(url: any, data: any) {
    // this.getAccessToken()
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        // Authorization: 'Bearer ' + this.accessToken,
      }),
    }
    return this.http.post<any>(this.SERVER_URL + url, data, httpOptions).pipe(
      map((response) => {
        return response
      }),
    )
  }
  getallAcademicLevelCourseById(id)
  {
    return this.http.get(this.SERVER_URL+endPoints.Get_academicLevel_Courses+id);
  }
  addAcademicLevelCourses(req)
  {
    return this.http.post(this.SERVER_URL+endPoints.Create_levelCourse,req);
  }
  getallInstitutes()
  {
    return this.http.get(this.SERVER_URL+endPoints.GetInstituteInfo);
  }
  getallCategorys(){
    return this.http.get(this.SERVER_URL+endPoints.CATEGORYS_DESKTYPES);
  }
  adddesktype(req)
  {
    return this.http.post(this.SERVER_URL+endPoints.ADD_CATEGORYS_DESKTYPES,req);
  }

  getallCategorysbyid(id)
  {
    return this.http.get(this.SERVER_URL+'course-categories/subcategory/'+id);
  }
  addsubcatgoroy1(req){
    return this.http.post(this.SERVER_URL+'course-categories/subcategory/create',req);
  }
  getallCategorysbyid2(id){
    return this.http.get(this.SERVER_URL+'course-categories/subcategory2/'+id);

  }
  addsubcatgoroy2(req){
    return this.http.post(this.SERVER_URL+'course-categories/subcategory2/create',req)
  }
  getallCategorysbyid3(id){
    return this.http.get(this.SERVER_URL+'course-categories/subcategory3/'+id);
  }
  addsubcatgoroy3(req){
    return this.http.post(this.SERVER_URL+'course-categories/subcategory3/create',req)

  }
  getallCategorysbyid4(id){
    return this.http.get(this.SERVER_URL+'course-categories/subcategory4/'+id);
  }
  addsubcatgoroy4(req)
  {
    return this.http.post(this.SERVER_URL+'course-categories/subcategory4/create',req)
  }
  getallCategorysbyid5(id){

    return this.http.get(this.SERVER_URL+'course-categories/subcategory5/'+id);
  }
  addsubcatgoroy5(req){
    return this.http.post(this.SERVER_URL+'course-categories/subcategory5/create',req)

  }
  updatesubcat1(req){
    return this.http.post(this.SERVER_URL+'course-categories/subcategory/update',req);
  }
  updatesubcat2(req){
    return this.http.post(this.SERVER_URL+'course-categories/subcategory2/update',req);

  }
  updatesubcat3(req){
    return this.http.post(this.SERVER_URL+'course-categories/subcategory3/update',req);

  }
  deletecat(req){
    return this.http.delete(this.SERVER_URL+'course-categories/delete/'+req);
  }
  updatesubcat4(req)
  {
    return this.http.post(this.SERVER_URL+'course-categories/subcategory4/update',req);
  }
  updatesubcat5(req){
    return this.http.post(this.SERVER_URL+'course-categories/subcategory5/update',req);

  }
  deletecat2(id){
    return this.http.delete(this.SERVER_URL+'course-categories/subcategory2/delete/'+id);

  }
  deletecat3(id){
    return this.http.delete(this.SERVER_URL+'course-categories/subcategory3/delete/'+id);

  }
  deletecat4(id){
    return this.http.delete(this.SERVER_URL+'course-categories/subcategory4/delete/'+id);

  }
  deletecat5(id){
    return this.http.delete(this.SERVER_URL+'course-categories/subcategory5/delete/'+id);

  }
}
