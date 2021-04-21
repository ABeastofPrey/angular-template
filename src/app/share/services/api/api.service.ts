import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public test(): Observable<string> {
    return of('test');
  }

  public post(api: string, data: any): Observable<any> {
    const url = `http://localhost:8090/${api}`;
    return this.http.post(url, data, {});
  }
}
