import { Injectable } from '@angular/core';
import { MD5 } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SignInServiceService {

  constructor() { }

  public signIn({ nameOrPhone, password }: { nameOrPhone: string, password: string }): void {
    const hash = MD5(password).toString();
    console.log(hash);
  }
}
