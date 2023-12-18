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

  public loginProcess(username: string, password: string, token: string): Observable<CommandResult> {
    console.log(username, password, token);
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    const body = {
      Username: username,
      Password: password,
      Token: token
    }
    return this.http.post<CommandResult>(`${sharedEnvirontment.baseGatewayWebApiUrl(sharedEnvirontment.login)}`, body, { headers });
  }
}
