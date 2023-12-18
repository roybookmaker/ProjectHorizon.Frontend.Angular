import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
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
    public loginService: LoginService
  ) {}

  LoginUser() {
    this.processUser('login');
    console.log(this.usernamevalue, this.passwordvalue, "testfromLoginUser");
    this.loginService.loginProcess(this.usernamevalue, this.passwordvalue, "").subscribe((result) => {
      
      if(result != null) {
        if(result.IsSuccessful) {
          console.log(result.Payload);
        }
        else {
          console.log("failed");
        }
      }
    });
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
    //this.resetinput();
    switch (action) {
      case 'login':
        this.visibilityloginstatus = true;
        this.visibilityregisterstatus = false;
        this.visibilityrecoverystatus = false;
        this.visibilityactionstatus = false;
        break;
      case 'register':
        this.visibilityloginstatus = false;
        this.visibilityregisterstatus = true;
        this.visibilityrecoverystatus = false;
        this.visibilityactionstatus = false;
        break;
      case 'recovery':
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
        console.log("Invalid action");
        break;
    }
  }

  processUser(action: string) {
    switch (action) {
      case 'login':
        if(this.usernamevalue == "" || this.passwordvalue == "") {
          console.log("Please fill in all fields");
          return;
        }
        else {
          this.switchView('action');
          this.actiontext = "LOGGING YOU IN, PLEASE WAIT...";
        }
        break;
      case 'register':
        if(this.registerfullnamevalue == "" || this.registerusernamevalue == "" || this.registerpasswordvalue == "" || this.registerconfirmpasswordvalue == "" || this.registeremailvalue == "") {
          console.log("Please fill in all fields");
          return;
        }
        else if(this.registerpasswordvalue != this.registerconfirmpasswordvalue) {
          console.log("Password and confirm password does not match");
          return;
        }
        else {
          this.switchView('action');
          this.actiontext = "REGISTERING YOU, PLEASE WAIT...";
        }
        break;
      case 'recovery':
        if(this.recoveremailvalue == "") {
          console.log("Please fill in all fields");
          return;
        }
        else {
          this.switchView('action');
          this.actiontext = "SENDING RECOVERY LINK TO YOUR EMAIL, PLEASE WAIT...";
        }
        break;
      default:
        console.log("Invalid action");
        break;
    }

    // setTimeout(() => {
    //   this.processaction(action);
    // }, 2000);
  }

  // private processaction(destination: string) {
    
  // }
}