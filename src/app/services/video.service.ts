import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  baseURL: string = "http://localhost:3000/api/";
  constructor(
    private http: HttpClient
  ) { }

  getServiceCall(url: string) {
    return this.http.get(this.baseURL + url);
  }

  postServiceCall(url:string,body){
    return this.http.post(this.baseURL + url, body);
  }

  putServiceCall(url:string,id:string,body){
    return this.http.put(this.baseURL+url+"/"+id,body);
  }

  deleteServiceCall(url:string,id){
    return this.http.delete(this.baseURL+url+"/"+id);
  }
}
