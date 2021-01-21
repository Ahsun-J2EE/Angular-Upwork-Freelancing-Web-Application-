import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-f',
  templateUrl: './profile-f.component.html',
  styleUrls: ['./profile-f.component.css']
})
export class ProfileFComponent implements OnInit {
  myLogo:string = "/assets/upworklogo.png";
  constructor() { }

  ngOnInit() {
  }

}
