import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class loginComponent {
  userData: FormGroup
  // обработка userData
    constructor(private readonly authService: AuthService){ 
      this.userData = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password:  new FormControl('', [Validators. required , Validators.minLength(4)] ),
      })
    }
  //проверка на валидность данных формы
    onSubmit(){
      if(this.userData.valid){
        this.authService.login(this.userData.value) 
        console.log(this.userData.value)
      }else {
        console.log("Not valid") 
    }
  }   
      
}
