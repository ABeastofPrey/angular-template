import { Injectable } from '@angular/core';

const tokenKey = 'user_info_token';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  public saveToken(token: string): void {
    localStorage.setItem(tokenKey, token);
  }

  public getToken(): string {
    return localStorage.getItem(tokenKey) !== null ? localStorage.getItem(tokenKey) as string : '';
  }

  public clearToken(): void {
    localStorage.removeItem(tokenKey);
  }

  public hasSignedIn(): boolean {
    return this.getToken() !== '';
  }
}
