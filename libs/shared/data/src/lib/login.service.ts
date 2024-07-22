import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  public user: string;

  constructor() { }

  public login(name: string) {
    this.user = name;
  }
}
