import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  private REST_API_SERVER = "http://localhost:1880";


  public sendGetRequest(params: string){
    return this.httpClient.get(this.REST_API_SERVER+params);
  }

  public sendPostRequest(params: string, body: any){
    return this.httpClient.post(this.REST_API_SERVER+params, body);
  }
}
