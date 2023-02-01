import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environments'
import { LoginRequestData, MeResponse, ResultCodes } from '../models/core.model'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
    isAuth = false

    constructor(private http: HttpClient, private router: Router) {}

    login(data: Partial<LoginRequestData>) {
        return this.http
            .post<MeResponse>(`${environment.baseNetworkUrl}/auth/login`, data)
            .subscribe(res => {
                if (res.resultCode === ResultCodes.success) {
                    // this.isAuth = true
                    this.router.navigate(['/'])
                }
            })
    }
    logout() {
        return this.http
            .delete<MeResponse>(`${environment.baseNetworkUrl}/auth/login`)
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
        })
    }
}
