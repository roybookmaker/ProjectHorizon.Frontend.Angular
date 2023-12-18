import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandResult } from '../../../libs/shared/command-result.model';
import { environment as sharedEnvirontment } from '../../../libs/shared/environment';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  constructor(private http: HttpClient) { }

  recoveryProcess(recoveryid: string, recoverycodevalue: string, passwordvalue: string, confirmedpasswordvalue: string): Observable<CommandResult> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      RecoveryId: recoveryid,
      RecoveryCodeValue: recoverycodevalue,
      PasswordValue: passwordvalue,
      ConfirmedPasswordValue: confirmedpasswordvalue
    }
    return this.http.post<CommandResult>(`${sharedEnvirontment.baseGatewayWebApiUrl(sharedEnvirontment.recovery)}`, body, { headers });
  }
}
