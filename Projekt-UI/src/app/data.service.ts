import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private userId = new BehaviorSubject<string>("");
  private userName = new BehaviorSubject<string>("Traveler");
  private userHealth = new BehaviorSubject<number>(0);
  private userRan = new BehaviorSubject<number>(0);
  private userAss = new BehaviorSubject<number>(0);
  private userDef = new BehaviorSubject<number>(0);
  private userPerks = new BehaviorSubject<Array<string>>([""]);

  id = this.userId.asObservable();
  traveler = this.userName.asObservable();
  health = this.userHealth.asObservable();
  ranger = this.userRan.asObservable();
  assault = this.userAss.asObservable();
  defense = this.userDef.asObservable();
  perks = this.userPerks.asObservable();

  // allUserData = 'http://localhost:8085/api/all';
  alexData = 'http://localhost:8085/api/Alex';
  createApi = 'http://localhost:8085/api/create/name';
  updateApi = 'http://localhost:8085/api/update';

  changeUserId(id: string) {
    console.log(id)
    this.userId.next(id);
  }

  changeUserName(name: string) {
    console.log(name)
    this.userName.next(name);
  }

  changeUserHealth(num: number) {
    console.log(num)
    this.userHealth.next(num);
  }

  changeUserRan(num: number) {
    console.log(num)
    this.userRan.next(num);
  }

  changeUserAss(num: number) {
    console.log(num)
    this.userAss.next(num);
  }

  changeUserDef(num: number) {
    console.log(num)
    this.userDef.next(num);
  }

  changeUserPerks(array: Array<string>) {
    console.log(array)
    this.userPerks.next(array);
  }

  getData() {
    // return this.http.get(this.allUserData);
    return this.http.get(this.alexData);
  }

  createUser(data: string) {
    return this.http.post<string>(this.createApi, data, { observe: "response" });
  }

  userStats(data) {
    return this.http.put(this.updateApi, data, { observe: "response" })
  }

}
