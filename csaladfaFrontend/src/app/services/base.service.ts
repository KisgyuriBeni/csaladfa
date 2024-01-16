import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public url = 'http://localhost:8000/'

  constructor(private http:HttpClient) {
    
  }
  public getTagok(target:any) {
    return this.http.get(this.url+target)
  }
  public addTagok(body:any){
    this.http.post(this.url+'csaladtagok',body)
  }
}
