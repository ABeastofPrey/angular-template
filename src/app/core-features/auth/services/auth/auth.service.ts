import { Injectable } from '@angular/core';

const tokenKey = 'user_info_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  protected saveToken(token: string): void {
    localStorage.setItem(tokenKey, token);
  }

  protected removeToken(): void {
    localStorage.removeItem(tokenKey);
  }

  public getToken(): string {
    return localStorage.getItem(tokenKey) !== null ? localStorage.getItem(tokenKey) as string : '';
  }

  public hasToken(): boolean {
    return this.getToken().trim() === '' ? false : true;
  }
}
