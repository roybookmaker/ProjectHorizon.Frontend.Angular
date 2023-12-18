import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecoveryService } from './recovery.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.css'
})
export class RecoveryComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  public constructor(
    public recoverService: RecoveryService
  ) { 
    this.recoveryid = String(this.route.snapshot.params['recoveryid']);
  }
  
  recoveryid: string = "";
  recoverycodevalue: string = "";
  passwordvalue: string = "";
  confirmedpasswordvalue: string = "";
}
