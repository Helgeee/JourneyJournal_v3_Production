import { Component, ViewChild} from '@angular/core';
import { AuthService } from '../../services/auth.service';



@Component( {
    selector: 'app-sidebar' ,
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SideBarComponent {
    // isAuth = true
    constructor(public authService: AuthService){}

    logoutHandler(){  ///Кнопка выхода
        this.authService.logout()
    }
}



