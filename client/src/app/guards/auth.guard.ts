import { CanActivateFn, Router } from "@angular/router";
import { AuthService} from "../services/auth.service";
import { inject } from "@angular/core";


//  защита роутов (перехода на разные страницы без аунтификации)

// Функция authGuard является  для создания CanActivateFn (функции проверки активации), 

export function authGuard(): CanActivateFn{
    return () => {
        const authService: AuthService = inject(AuthService)
        const router: Router = inject(Router)
        if (authService.isAuthSig()){

            return true; 
        }
        router.navigate([''])
        return false
        // После чего происходит проверка, вызывается метод isAuthSig() у AuthService для проверки аутентификации пользователя.
// Если пользователь аутентифицирован, возвращается true, в противном случае происходит перенаправление на главную страницу и возвращается false.
    }
}
// Внутри функции создается экземпляр AuthService и Router с помощью метода inject.
