import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // allUserData = 'http://localhost:8085/api/all';
  alexData = 'http://localhost:8085/api/Alex';

  createApi = 'http://localhost:8085/api/create';

  getData(){
    // return this.http.get(this.allUserData);
    return this.http.get(this.alexData);
  }

  createUser(data: string){
    return this.http.post<string>(this.createApi, data, {observe: "response"});
  }

}
