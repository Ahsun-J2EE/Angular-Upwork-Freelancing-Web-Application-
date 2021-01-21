import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpworkService } from '../upwork.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private service: UpworkService) { }

  ngOnInit() {
  }
  gotoLogin(){
    this.router.navigate(['/login']);
  }
  regUser(data){
    this.service.regUser(data);
  }
}
