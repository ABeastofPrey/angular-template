import { Inject, Injectable } from '@angular/core';
import { isNull } from 'ramda-adjunct';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '@app/features/auth/services/auth/auth.service';
import { User } from '@app/_share-models';
import { LocalStorage } from '@app/_share-utils';

const userKey = 'user_info';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AuthService {

  private userBSubject: BehaviorSubject<User | null>;

  get user(): User | null {
    return this.userBSubject.value;
  }

  constructor(@Inject(LocalStorage) protected localStorage: Storage) {
    super(localStorage);
    this.userBSubject = new BehaviorSubject<User | null>(this.getUserFromLocal());
  }

  public hasSignedIn(): boolean {
    const hasUser = isNull(this.user) ? false : true;
    const hasToken = this.hasToken();
    return hasToken && hasUser;
  }

  public saveUser(user: User): void {
    this.setItem(userKey, JSON.stringify(user));
    this.userBSubject.next(user);
  }

  public removeUser(): void {
    this.removeItem(userKey);
    this.userBSubject.next(null);
  }

  private getUserFromLocal(): User | null {
    const userStr = this.getItem(userKey);
    return isNull(userStr) ? null : JSON.parse(userStr);
  }
}
