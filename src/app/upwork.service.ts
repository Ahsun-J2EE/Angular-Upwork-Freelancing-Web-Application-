import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpworkService {
  url = " http://localhost:3000/Client";
  url1= "http://localhost:3000/JobPost";
  constructor(private http: HttpClient) { }
  regUser(data){
    this.http.post(this.url, {
      name: data.name,
      email: data.email,
      password: data.password
    }).toPromise();
  }
  logUser(data){
    return this.http.get(this.url);
  }
  createJob(data){
    this.http.post(this.url1, {
      Job_Title: data.jName,
      Job_Cost: data.JCost,
      Description: data.description
    }).toPromise();
  }
  getJobPost(){
    return this.http.get(this.url1)
  }
}
