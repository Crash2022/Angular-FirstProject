import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environments'
import { BaseTodoResponse, LoginRequestData, MeResponse, ResultCodes } from '../models/core.model'
import { Router } from '@angular/router'
import { catchError, EMPTY } from 'rxjs'
import { BeautyLoggerService } from './beauty-logger.service'
import { NotificationService } from './notification.service'

@Injectable()
export class AuthService {
    isAuth = false

    // eslint-disable-next-line @typescript-eslint/ban-types
    resolveAuthRequest: Function = () => {
        // code
    }
    authRequest = new Promise(resolve => {
        this.resolveAuthRequest = resolve
    })

    constructor(
        private http: HttpClient,
        private router: Router,
        private beautyLoggerService: BeautyLoggerService,
        private notificationService: NotificationService
    ) {}

    login(data: Partial<LoginRequestData>) {
        return this.http
            .post<BaseTodoResponse<{ userId: number }>>(
                `${environment.baseNetworkUrl}/auth/login`,
                data
            )
            .pipe(catchError(this.errorHandler.bind(this)))
            .subscribe(res => {
                if (res.resultCode === ResultCodes.success) {
                    // this.isAuth = true
                    this.router.navigate(['todos'])
                } else {
                    this.notificationService.handleError(res.messages[0])
                }
            })
    }
    logout() {
        return this.http
            .delete<BaseTodoResponse>(`${environment.baseNetworkUrl}/auth/login`)
            .pipe(catchError(this.errorHandler.bind(this)))
            .subscribe(res => {
                if (res.resultCode === ResultCodes.success) {
                    this.router.navigate(['login'])
                }
            })
    }
    authMe() {
        return this.http
            .get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`)
            .pipe(catchError(this.errorHandler.bind(this)))
            .subscribe(res => {
                if (res.resultCode === ResultCodes.success) {
                    this.isAuth = true
                } else {
                    this.notificationService.handleError(res.messages[0])
                }
                this.resolveAuthRequest()
            })
    }

    // обработчик ошибок
    private errorHandler(error: HttpErrorResponse) {
        // this.beautyLoggerService.logger(error.message, 'error')
        this.notificationService.handleError(error.message)
        // возврат стрима
        return EMPTY
    }
}
