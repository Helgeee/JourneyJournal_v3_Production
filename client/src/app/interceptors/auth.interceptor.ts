import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { API_URL } from "../constant/constants";

export class AuthInterceptor implements HttpInterceptor{
    constructor(){}
// Функция перехвата и обработки запросов перед их отправкой
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler) {
            const token = localStorage.getItem('token')
            if (token) {
                  // Если токен существует, добавляем его в заголовок запроса и обновляем URL запроса
                req = req.clone({
                    setHeaders: {
                        Authorization : `Bearer ${token}`,
                    },
                    url: `${API_URL}/${req.url}`, // Обновляем URL запроса с учетом базового API_URL
                });
                
            }
            return next.handle(req); // Передаем обработанный запрос дальше по цепочке обработчиков
        
    }
}