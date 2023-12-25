import { Component, inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { RecoveryService } from './recovery.service';
import { NotificationService } from "../shared-component/notification/notification.service";
import { NotificationType, GenericProcess } from "../../../libs/shared/EnumLib/genericenum";
import { DevnotesService } from "../shared-component/devnotes/devnotes.service";

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.css'
})
export class RecoveryComponent implements OnInit {
  recoveryid: string = "";
  recoverycodevalue: string = "";
  passwordvalue: string = "";
  confirmedpasswordvalue: string = "";
  actiontext: string = "";
  visibilityformstatus: boolean = true;
  visibilityactionstatus: boolean = false;

  route: ActivatedRoute = inject(ActivatedRoute);
  public constructor(
    public recoverService: RecoveryService,
    private notificationService: NotificationService,
    private devnotesService: DevnotesService,
    private router: Router
  ) { 
    this.recoveryid = String(this.route.snapshot.params['recoveryid']);
  }

  ngOnInit(): void {
    this.devnotesService.setNotes('Reset Password Page', 'this page is used to reset password. Everytime user enter the recovery code they provided in the email, backend system will use the password and generate new salt for the user. \nSame as the registration process, the password will be hashed using Argon2 encryption and stored in the database.');
  }

  switchView(action: string) {
    switch (action) {
      case 'reset':
        this.visibilityformstatus = true;
        this.visibilityactionstatus = false;
        break;
      case 'action':
        this.visibilityformstatus = false;
        this.visibilityactionstatus = true;
        break;
      default:
        this.notificationService.showNotification("Invalid action", NotificationType.error);
        break;
    }
  }

  processResetPassword() {
    if (this.passwordvalue != this.confirmedpasswordvalue) {
      this.notificationService.showNotification("Password and confirmed password does not match", NotificationType.error);
      return;
    } else {
      this.switchView('action');
      this.actiontext = "Changing password...";
    }

    setTimeout(() => {
      console.log(this.recoveryid + " " + this.recoverycodevalue + " " + this.passwordvalue);
      this.recoverService.recoveryProcess(this.recoveryid, this.recoverycodevalue, this.passwordvalue).subscribe({
        next: (result) => {
          if (result.isSuccessful) {
            this.actiontext = "Password has been reset successfully";
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 2000);
          } else {
            this.notificationService.showNotification(result.message, NotificationType.error);
          }
        },
        error: (ErrorResponse) => {
          this.notificationService.showNotification(ErrorResponse.error.message, NotificationType.error);
          this.switchView('reset');
        }
      });
    }, 1000);
  }
}
