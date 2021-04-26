import { Injectable } from '@angular/core';
import { isNull } from 'ramda-adjunct';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '@app/core-features/auth/services/auth/auth.service';
import { User } from '@app/_share-models';

const userKey = 'user_info';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userBSubject: BehaviorSubject<User | null>;

  get user(): User | null {
    return this.userBSubject.value;
  }

  constructor(private auth: AuthService) {
    this.userBSubject = new BehaviorSubject<User | null>(this.getUserFromLocal());
  }

  public hasSignedIn(): boolean {
    const hasUser = isNull(this.user) ? false : true;
    const hasToken = this.auth.hasToken();
    return hasToken && hasUser;
  }

  public saveUser(user: User): void {
    localStorage.setItem(userKey, JSON.stringify(user));
    this.userBSubject.next(user);
  }

  public removeUser(): void {
    localStorage.removeItem(userKey);
    this.userBSubject.next(null);
  }

  private getUserFromLocal(): User | null {
    const userStr = localStorage.getItem(userKey);
    return isNull(userStr) ? null : JSON.parse(userStr);
  }
}
