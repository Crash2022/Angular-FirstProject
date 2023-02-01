import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environments'
import { BaseTodoResponse, LoginRequestData, MeResponse, ResultCodes } from '../models/core.model'
import { Router } from '@angular/router'

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

    constructor(private http: HttpClient, private router: Router) {}

    login(data: Partial<LoginRequestData>) {
        return this.http
            .post<BaseTodoResponse<{ userId: number }>>(
                `${environment.baseNetworkUrl}/auth/login`,
                data
            )
            .subscribe(res => {
                if (res.resultCode === ResultCodes.success) {
                    // this.isAuth = true
                    this.router.navigate(['/'])
                }
            })
    }
    logout() {
        return this.http
            .delete<BaseTodoResponse>(`${environment.baseNetworkUrl}/auth/login`)
            .subscribe(res => {
                if (res.resultCode === ResultCodes.success) {
                    this.router.navigate(['/login'])
                }
            })
    }
    authMe() {
        return this.http.get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe(res => {
            if (res.resultCode === ResultCodes.success) {
                this.isAuth = true
            }
            this.resolveAuthRequest()
        })
    }
}
