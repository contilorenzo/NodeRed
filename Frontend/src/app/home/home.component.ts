import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  number: any;
  body: any;

  constructor(private httpclient:HttpClientService) { }

  ngOnInit(): void {
    this.httpclient.sendGetRequest('/get').subscribe((data: any[])=>{
      this.number = data;
    })
  }

  postRequest(min, max) {
    this.body = [{ min: min, max: max}];
    this.httpclient.sendPostRequest('/post', this.body).subscribe();
  }

}
