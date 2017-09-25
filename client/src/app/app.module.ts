import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Feathers } from './services/feathers.service';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [
    Feathers,
    DataService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
