import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  BrowserAnimationsModule  }  from '@angular/platform-browser/animations';
import {  ToastrModule  }  from  'ngx-toastr' ;

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { SideBarComponent } from './interface/sidebar/sidebar.component';
import { Header } from './interface/header/header.component';
import { SettingsComponent } from './page/settings/settings.component';
import { CreateNotesComponent } from './page/create-notes/create-notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './page/signup/signup.component';
import { loginComponent } from './page/login/login.component';
import { CommonModule } from '@angular/common';
import { NotesFormComponent } from './component/notes-form/notes-form.component';
import { CollectionComponent } from './page/collection-trips/collection.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MiniNotesFormComponent } from './component/mini-notes-form/mini-notes-form.component';
import { ProfileComponent } from './page/profile/profile.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { MessengerComponent } from './page/messenger/messenger.component';
import { JourneyComponent } from './page/journey/journey.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    CommonModule,
    
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    ToastrModule.forRoot ( ) , 


  ],
  declarations: [
    AppComponent,
    SignupComponent,
    loginComponent,
    HomeComponent,
    SideBarComponent,
    Header,
    SettingsComponent,
    CreateNotesComponent,
    NotesFormComponent,
    CollectionComponent,
    MiniNotesFormComponent,
    ProfileComponent,
    PrivacyPolicyComponent,
    MessengerComponent,
    JourneyComponent,
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: AuthInterceptor ,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
