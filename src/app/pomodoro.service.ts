import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class PomodoroService {

  private apiUrl = 'http://192.168.1.42:3000';

  constructor(private httpClient: HttpClient) { }

  start(user: string) {

    return this.httpClient.post(`${ this.apiUrl }/start`, {user});
  }
}
