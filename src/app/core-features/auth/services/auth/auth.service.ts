import { Injectable } from '@angular/core';

const tokenKey = 'user_info_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements Storage {

  get length(): number { return this.localStorage.length; }

  constructor(protected localStorage: Storage) { }

  // *********localStorage related methods********** //
  public setItem(key: string, val: string): void {
    this.localStorage.setItem(key, val);
  }

  public getItem(key: string): string | null {
    return this.localStorage.getItem(key);
  }

  public removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }

  public key(index: number): string | null {
    return this.localStorage.key(index);
  }

  public clear(): void { this.localStorage.clear(); }
  // ************************************************ //

  public saveToken(token: string): void {
    this.localStorage.setItem(tokenKey, token);
  }

  public removeToken(): void {
    this.localStorage.removeItem(tokenKey);
  }

  public getToken(): string {
    return this.localStorage.getItem(tokenKey) !== null ? this.localStorage.getItem(tokenKey) as string : '';
  }

  public hasToken(): boolean {
    return this.getToken().trim() === '' ? false : true;
  }
}
