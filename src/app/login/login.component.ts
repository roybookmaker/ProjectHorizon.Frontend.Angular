import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from './login.service';
import { NotificationService } from "../shared-component/notification/notification.service";
import { NotificationType, GenericProcess } from "../../../libs/shared/EnumLib/genericenum";
import { DevnotesService } from "../shared-component/devnotes/devnotes.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  visibilityloginstatus: boolean = true;
  visibilityregisterstatus: boolean = false;
  visibilityrecoverystatus: boolean = false;
  visibilityactionstatus: boolean = false;
  usernamevalue: string = "";
  passwordvalue: string = "";
  registerfullnamevalue: string = "";
  registerusernamevalue: string = "";
  registerpasswordvalue: string = "";
  registerconfirmpasswordvalue: string = "";
  registeremailvalue: string = "";
  recoveremailvalue: string = "";
  actiontext: string = "";

  public constructor(
    public loginService: LoginService,
    private notificationService: NotificationService,
    private devnotesService: DevnotesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.devnotesService.setNotes('what is Project Horizon?', 'this is a developer note.');
  }

  restrictSymbols(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^a-zA-Z0-9]/g, '');
  }

  private resetinput() {
    this.usernamevalue = "";
    this.passwordvalue = "";
    this.registerfullnamevalue = "";
    this.registerusernamevalue = "";
    this.registerpasswordvalue = "";
    this.registerconfirmpasswordvalue = "";
    this.registeremailvalue = "";
    this.recoveremailvalue = "";
  }

  switchView(action: string) {
    switch (action) {
      case 'login':
        this.resetinput();
        this.visibilityloginstatus = true;
        this.visibilityregisterstatus = false;
        this.visibilityrecoverystatus = false;
        this.visibilityactionstatus = false;
        break;
      case 'register':
        this.resetinput();
        this.visibilityloginstatus = false;
        this.visibilityregisterstatus = true;
        this.visibilityrecoverystatus = false;
        this.visibilityactionstatus = false;
        break;
      case 'recovery':
        this.resetinput();
        this.visibilityloginstatus = false;
        this.visibilityregisterstatus = false;
        this.visibilityrecoverystatus = true;
        this.visibilityactionstatus = false;
        break;
      case 'action':
        this.visibilityloginstatus = false;
        this.visibilityregisterstatus = false;
        this.visibilityrecoverystatus = false;
        this.visibilityactionstatus = true;
        break;
      default:
        this.resetinput();
        console.log("Invalid action");
        break;
    }
  }

  processUser(action: string) {
    switch (action) {
      case 'login':
        if (this.usernamevalue == "" || this.passwordvalue == "") {
          this.notificationService.showNotification(GenericProcess.fillallfields, NotificationType.error);
          return;
        } else {
          this.switchView('action');
          this.actiontext = "LOGGING YOU IN, PLEASE WAIT...";
        }
        break;
      case 'register':
        if (
          this.registerfullnamevalue == "" ||
          this.registerusernamevalue == "" ||
          this.registerpasswordvalue == "" ||
          this.registerconfirmpasswordvalue == "" ||
          this.registeremailvalue == ""
        ) {
          this.notificationService.showNotification(GenericProcess.fillallfields, NotificationType.error);
          return;
        } else if (this.registerpasswordvalue != this.registerconfirmpasswordvalue) {
          this.notificationService.showNotification("Password and confirm password does not match", NotificationType.error);
          return;
        } else {
          this.switchView('action');
          this.actiontext = "REGISTERING YOU, PLEASE WAIT...";
        }
        break;
      case 'recovery':
        if (this.recoveremailvalue == "") {
          this.notificationService.showNotification(GenericProcess.fillallfields, NotificationType.error);
          return;
        } else {
          this.switchView('action');
          this.actiontext = "SENDING RECOVERY LINK TO YOUR EMAIL, PLEASE WAIT...";
        }
        break;
      default:
        this.notificationService.showNotification("Invalid action", NotificationType.error);
        break;
    }

    setTimeout(() => {
      this.processaction(action);
    }, 2000);
  }

  private processaction(destination: string) {
    switch (destination) {
      case 'login':
        this.loginService.loginProcess(this.usernamevalue, this.passwordvalue, "").subscribe((result) => {
          console.log(result.payload);
          if(result != null) {
            console.log(result);
            if(result.isSuccessful) {
              console.log("Login successful.");
              this.loginService.storeCredentials(this.usernamevalue, result.payload.token);
              this.router.navigate(['/dashboard']);
            }
            else {
              this.notificationService.showNotification(result?.message, NotificationType.error);
              this.switchView('login');
            }
          }
        });
        break;
      case 'register':
        this.loginService.registerProcess(this.registerfullnamevalue, this.registerusernamevalue, this.registerpasswordvalue, this.registeremailvalue).subscribe((result) => {
          if(result != null) {
            if(result.isSuccessful) {
              this.notificationService.showNotification("Registration successful.", NotificationType.success);
              this.switchView('login');
            }
            else {
              this.notificationService.showNotification(result?.message, NotificationType.error);
              this.switchView('register');
            }
          }
        });
        break;
      case 'recovery':
        this.loginService.recoveryProcess(this.recoveremailvalue).subscribe((result) => {
          if(result != null) {
            if(result.isSuccessful) {
              this.notificationService.showNotification("Recovery link sent to your email. Please check your email.", NotificationType.success);
              this.switchView('login');
            }
            else {
              this.notificationService.showNotification(result?.message, NotificationType.error);
              this.switchView('recovery');
            }
          }
        });
        break;
    }
  }
}