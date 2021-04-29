import { Injectable } from '@angular/core';
import { User } from '@app/_share-models';
import { ApiService } from '@app/_share-services';
import { isNil } from 'ramda';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserCenterService {

  constructor(private api: ApiService) { }

  public getUsers(): Observable<User[]> {
    const api = 'user/all';
    return this.api.get<{ users: User[] }>(api).pipe(
      delay(1000),
      map((res) => isNil(res.body) ? [] : res.body.users)
    );
  }
}
