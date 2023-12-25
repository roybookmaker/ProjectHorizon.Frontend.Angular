import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandResult } from '../../../libs/shared/command-result.model';
import { environment as sharedEnvirontment } from '../../../libs/shared/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  public loginProcess(username: string, password: string, token: string = ''): Observable<CommandResult> {
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    const body = {
      Username: username,
      Password: password,
      Token: token
    }
    return this.http.post<CommandResult>(`${sharedEnvirontment.baseGatewayWebApiUrl(sharedEnvirontment.login)}`, body, { headers });
  }

  public registerProcess(fullname: string, username: string, password: string, email: string): Observable<CommandResult> {
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    const body = {
      Fullname: fullname,
      Username: username,
      Password: password,
      Email: email
    }
    return this.http.post<CommandResult>(`${sharedEnvirontment.baseGatewayWebApiUrl(sharedEnvirontment.register)}`, body, { headers });
  }

  public recoveryProcess(email: string): Observable<CommandResult> {
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    const body = {
      Email: email
    }
    return this.http.post<CommandResult>(`${sharedEnvirontment.baseGatewayWebApiUrl(sharedEnvirontment.recovery)}`, body, { headers });
  }

  public storeCredentials(username: string, token: string): void {
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
  }
}