import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombatService {
  private message = new Subject<string>();

  updateMessage(message: string, target: string) {
    this.message.next(message + target);
  }

  clearMessage() {
    this.message.next();
  }

  getMessage(): Observable<string> {
    return this.message.asObservable();
  }

  constructor() { }
}
