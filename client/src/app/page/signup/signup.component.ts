import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent{
  userData: FormGroup
  // обработка userData
  constructor(private readonly authService: AuthService){ 


    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

      username:  new FormControl('', [Validators.required ]),

      password:  new FormControl('', [Validators.required , Validators.minLength(6)] ),

      type: new FormControl('' , []),

      checkbox: new FormControl( [false, Validators.requiredTrue])
    })
  }
  // проверка на валидность данных формы
  checkboxChecked: boolean = false; // переменная для хранения состояния checkbox

    onSubmit(){
        if(this.userData.valid && this.checkboxChecked){
          this.authService.signUp(this.userData.value) 
        } else {
          console.log("Form data is not valid or checkbox is not checked") 
        }
    }
    // Функция для обновления состояния checkbox
    updateCheckbox(event: any){
        this.checkboxChecked = event.target.checked;
    }
}
