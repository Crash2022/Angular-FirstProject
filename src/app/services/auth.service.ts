import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environments'
import { Observable } from 'rxjs'

interface MeResponse {
    data: {
        id: number
        login: string
        email: string
    }
    messages: string[]
    fieldErrors: string[]
    resultCode: number
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isAuth = false

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe(res => {
            if (res.resultCode === 0) {
                this.isAuth = true
            }
        })
    }
}
