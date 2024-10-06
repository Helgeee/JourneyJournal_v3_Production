import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { MyEmptyPage } from './page/empty-route/empty-route.component';

import { SettingsComponent } from './page/settings/settings.component';
import { CreateNotesComponent } from './page/create-notes/create-notes.component';
import { loginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { CollectionComponent } from './page/collection-trips/collection.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { MessengerComponent } from './page/messenger/messenger.component';
import { JourneyComponent } from './page/journey/journey.component';
// Описание маршрутов в Angular приложении
// Каждый объект в массиве `routes` представляет собой маршрут в приложении, который состоит из пути и соответствующего ему компонента

const routes: Routes = [
  {
    path: '',  
    component: loginComponent , // 1. Пустой путь перенаправляется на компонент LoginComponent
  },
  {
    path: 'privacy-policy',
    title: '/privacy-policy',
    component: PrivacyPolicyComponent, // 2. Путь 'privacy-policy' перенаправляется на компонент PrivacyPolicyComponent
  },
  {
    path: 'signup' ,
    component: SignupComponent ,// 3. Путь 'signup' перенаправляется на компонент SignupComponent
  },
  {
    path: 'home',
    title: 'home',
    component: HomeComponent ,
    canActivate: [ authGuard()],// 4. Путь 'home' перенаправляется на компонент HomeComponent и требует авторизации с помощью canActivate guard
  },
  {
    path: 'profile',  
    component: ProfileComponent,
    canActivate: [ authGuard()],// 5. Путь 'profile' перенаправляется на компонент ProfileComponent и требует авторизации
  },
  {
    path: 'journey',
    component: JourneyComponent ,
    canActivate: [ authGuard()],// 6. Путь 'journey' перенаправляется на компонент JourneyComponent и требует авторизации
  },
  {
    path: 'trips',
    component: CollectionComponent,
    canActivate: [ authGuard()],// 7. Путь 'trips' перенаправляется на компонент CollectionComponent и требует авторизации
  }, 
  {
    path: 'createNotes',
    component: CreateNotesComponent,
    canActivate: [ authGuard()],// 8. Путь 'createNotes' перенаправляется на компонент CreateNotesComponent и требует авторизации
  },
  {

    path:'messenger',
    component: MessengerComponent,
    canActivate: [ authGuard()],// 9. Путь 'messenger' перенаправляется на компонент MessengerComponent и требует авторизации
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [ authGuard()],// 10. Путь 'settings' перенаправляется на компонент SettingsComponent и требует авторизации
  },
  
  {
    path: '**',
    component: MyEmptyPage,
    canActivate: [ authGuard()],// 11. Любой другой путь (**), который не подходит под вышеперечисленные, перенаправляется на компонент MyEmptyPage и требует авторизации
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
