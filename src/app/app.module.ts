import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RecoveryComponent } from './recovery/recovery.component'; 
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './shared-component/notification/notification.component';
import { DevnotesComponent } from './shared-component/devnotes/devnotes.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoveryComponent,
    NotificationComponent,
    DevnotesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
