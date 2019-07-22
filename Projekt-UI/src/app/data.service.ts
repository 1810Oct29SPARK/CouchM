import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // allUserData = 'http://localhost:8085/api/all';
  alexData = 'http://localhost:8085/api/Alex';

  getData(){
    // return this.http.get(this.allUserData);
    return this.http.get(this.alexData);
  }

}
