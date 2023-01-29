import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environments'
import { MeResponse, ResultCodes } from '../models/core.model'

@Injectable()
export class AuthService {
    isAuth = false

    constructor(private http: HttpClient) {}

    authMe() {
        return this.http.get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe(res => {
            if (res.resultCode === ResultCodes.success) {
                this.isAuth = true
            }
        })
    }
}
