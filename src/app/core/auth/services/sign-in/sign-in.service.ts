import { Injectable } from '@angular/core';
import { MD5 } from 'crypto-js';
import { ApiService } from 'src/app/share/services';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private api: ApiService) { }

  public signIn({ phone, password }: { phone: string, password: string }): void {
    const hash = MD5(password).toString();
    this.api.post('auth/login', { account: '13585845432', password: '123456' }).subscribe(res => {
      console.dir(res);
    });
  }
}
