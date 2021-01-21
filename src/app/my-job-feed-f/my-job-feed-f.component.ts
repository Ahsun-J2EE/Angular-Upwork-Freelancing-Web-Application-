import { Component, OnInit } from '@angular/core';
import { UpworkService } from '../upwork.service';

@Component({
  selector: 'app-my-job-feed-f',
  templateUrl: './my-job-feed-f.component.html',
  styleUrls: ['./my-job-feed-f.component.css']
})
export class MyJobFeedFComponent implements OnInit {
  postData;
  constructor(private service:UpworkService) { }

  ngOnInit() {
    this.getJobPost();
  }
  getJobPost(){
    this.service.getJobPost().subscribe(
      (response)=>{
        this.postData=response;
      })
  }

}
