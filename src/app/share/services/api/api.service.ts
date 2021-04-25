import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get<R>(api: string, params?: Params): Observable<HttpResponse<R>> {
    const _url = url + 'api/' + api;
    const _params = params ? Object.keys(params).reduce((acc: HttpParams, key) => acc.set(key, (params as Params)[key]), new HttpParams()) : undefined;
    return this.http.get<HttpResponse<R>>(_url, { params: _params }).pipe(catchError(this.handleError));
  }

  public post<D, R>(api: string, data: D): Observable<HttpResponse<R>> {
    const _url = url + 'api/' + api;
    const options = { observe: 'body' as const, responseType: 'json' as const };
    return this.http.post<HttpResponse<R>>(_url, data, options).pipe(
      // retry(2),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(error);
  }
}

interface Params {
  [key: string]: string
}
