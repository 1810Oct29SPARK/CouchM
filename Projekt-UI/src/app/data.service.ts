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
  private userStr = new BehaviorSubject<number>(1);
  private userPer = new BehaviorSubject<number>(1);
  private userEnd = new BehaviorSubject<number>(1);
  private userCha = new BehaviorSubject<number>(1);
  private userInt = new BehaviorSubject<number>(1);
  private userAgi = new BehaviorSubject<number>(1);
  private userLuck = new BehaviorSubject<number>(1);

  id = this.userId.asObservable();
  traveler = this.userName.asObservable();
  strength = this.userStr.asObservable();
  perception = this.userPer.asObservable();
  endurance = this.userEnd.asObservable();
  charisma = this.userCha.asObservable();
  intelligence = this.userInt.asObservable();
  agility = this.userAgi.asObservable();
  luck = this.userLuck.asObservable();

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

  changeUserStr(num: number) {
    console.log(num)
    this.userStr.next(num);
  }

  changeUserPer(num: number) {
    console.log(num)
    this.userPer.next(num);
  }

  changeUserEnd(num: number) {
    console.log(num)
    this.userEnd.next(num);
  }

  changeUserCha(num: number) {
    console.log(num)
    this.userCha.next(num);
  }

  changeUserInt(num: number) {
    console.log(num)
    this.userInt.next(num);
  }

  changeUserAgi(num: number) {
    console.log(num)
    this.userAgi.next(num);
  }

  changeUserLuck(num: number) {
    console.log(num)
    this.userLuck.next(num);
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
