import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  private token: BehaviorSubject<string>;
  private email: BehaviorSubject<string>;
  private role: BehaviorSubject<string>;
  private theme: BehaviorSubject<string>;

  constructor(
    private storage: Storage
  ) {
    this.token = new BehaviorSubject('');
    this.email = new BehaviorSubject('');
    this.role = new BehaviorSubject('');
    this.theme = new BehaviorSubject('light');
  }

  clearStorage() {
    return this.storage.clear();
  }

  getUserSettingsFromStorage() {
    this.storage.get('token').then(value => {
        value
          ? this.setToken(value)
          : this.setToken('');
    });

    this.storage.get('email').then(value => {
      value
        ? this.setEmail(value)
        : this.setEmail('');
    });

    this.storage.get('role').then(value => {
      value
        ? this.setRole(value)
        : this.setRole('');
    });

    this.storage.get('theme').then(value => {
      value
        ? this.setTheme(value)
        : this.setTheme('light');
    });
  }

  getToken() {
    return this.token.asObservable();
  }

  setToken(val: string) {
    this.storage.set('token', val);
    this.token.next(val);
  }

  getEmail() {
    return this.email.asObservable();
  }

  setEmail(val: string) {
    this.storage.set('email', val);
    this.email.next(val);
  }

  getRole() {
    return this.role.asObservable();
  }

  setRole(val: string) {
    this.storage.set('role', val);
    this.role.next(val);
  }

  getTheme() {
    return this.theme.asObservable();
  }

  setTheme(val: string) {
    this.storage.set('theme', val);
    this.theme.next(val);
  }
}
