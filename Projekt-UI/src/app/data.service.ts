import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  private userMove = new BehaviorSubject<number>(0);
  private userPerks = new BehaviorSubject<Array<string>>(["", "", ""]);

  id = this.userId.asObservable();
  name = this.userName.asObservable();
  health = this.userHealth.asObservable();
  ranger = this.userRan.asObservable();
  assault = this.userAss.asObservable();
  defense = this.userDef.asObservable();
  move = this.userMove.asObservable();
  perks = this.userPerks.asObservable();

  getUserByIdApi = 'http://localhost:8085/user/';
  allUserData = 'http://localhost:8085/user/all';
  createApi = 'http://localhost:8085/user/create';
  updateApi = 'http://localhost:8085/user/update';
  createOrkApi = 'http://localhost:8085/ork/create';
  getAllOrkApi = 'http://localhost:8085/ork/all';
  updateOrkApi = 'http://localhost:8085/ork/update';
  deleteOrkApi = 'http://localhost:8085/ork/delete';

  changeUserId(id: string) {
    this.userId.next(id);
  }

  changeUserName(name: string) {
    this.userName.next(name);
  }

  changeUserHealth(num: number) {
    this.userHealth.next(num);
  }

  changeUserRan(num: number) {
    this.userRan.next(num);
  }

  changeUserAss(num: number) {
    this.userAss.next(num);
  }

  changeUserDef(num: number) {
    this.userDef.next(num);
  }

  changeUserMove(num: number) {
    this.userMove.next(num);
  }

  changeUserPerks(array: Array<string>) {
    console.log(array)
    this.userPerks.next(array);
  }

  getUserById(id: string) {
    return this.http.get(this.getUserByIdApi + id);
  }

  getAllUserData() {
    return this.http.get(this.allUserData);
  }

  createUser(data: string) {
    return this.http.post<string>(this.createApi, data, { observe: "response" });
  }

  userStats(data) {
    return this.http.put(this.updateApi, data, { observe: "response" });
  }

  createOrk() {
    return this.http.get(this.createOrkApi, { observe: "response" });
  }

  getAllOrks() {
    return this.http.get(this.getAllOrkApi, { observe: "response" });
  }

  updateOrk(data) {
    return this.http.put(this.updateOrkApi, data, { observe: "response" });
  }

  deleteOrk(data) {
    console.log("deleting Ork with id: " + data["id"]);
    return this.http.post(this.deleteOrkApi, data, { observe: "response" });
  }

}
