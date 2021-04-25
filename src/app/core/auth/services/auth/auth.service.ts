import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/share/models';

const tokenKey = 'user_info_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!: User;

  protected userBSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor() { }

  protected saveToken(token: string): void {
    localStorage.setItem(tokenKey, token);
  }

  protected clearToken(): void {
    localStorage.removeItem(tokenKey);
  }

  public getToken(): string {
    return localStorage.getItem(tokenKey) !== null ? localStorage.getItem(tokenKey) as string : '';
  }

  public hasSignedIn(): boolean {
    return this.getToken() !== '';
  }
}
