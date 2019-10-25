import { Injectable, Inject } from '@angular/core';
import { StorageServiceModule, LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoCookieService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  userData: any = [];

  saveUserInfoCookie(key, val) {
    console.log(`user data recieved; key: ${key}, value: ${val}`);
    this.storage.set(key, val);
    this.userData[key] = this.storage.get(key);
  }

  getUserInfoCookie(key) {
    console.log(`incoming user data key ${key}`)
    this.userData[key] = this.storage.get(key)
  }

}
