import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpworkService } from '../upwork.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: UpworkService) { }
  userData;
  msg;
  ngOnInit() {
  }
  gotoSignup(){
    this.router.navigate(['/signup']);
  }
  logUser(data){
    this.service.logUser(data).subscribe(
      (response)=> {
        this.userData= response;
        for(let i=0; i<this.userData.length; i++){
          if(data.name == this.userData[i].name && data.password == this.userData[i].password){
            this.router.navigate(["/client"]);
          }else{
            this.msg= "Login Failed"
          }
        }
      }
      
    )
  }
  
}
