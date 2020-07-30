import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/heroes/');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
