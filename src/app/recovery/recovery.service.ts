import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandResult } from '../../../libs/shared/command-result.model';
import { environment as sharedEnvirontment } from '../../../libs/shared/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  constructor(private http: HttpClient) { }

  recoveryProcess(recoveryid: string, recoverycodevalue: string, passwordvalue: string): Observable<CommandResult> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      Id: recoveryid,
      RecoveryKey: recoverycodevalue,
      NewPassword: passwordvalue
    }
    return this.http.post<CommandResult>(`${sharedEnvirontment.baseGatewayWebApiUrl(sharedEnvirontment.reset)}`, body, { headers });
  }
}
