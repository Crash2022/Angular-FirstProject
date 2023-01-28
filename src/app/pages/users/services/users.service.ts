import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environments'
import { map, Observable } from 'rxjs'

interface UserResponse {
    items: User[]
    totalCount: number
}

export interface User {
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    httpOptions = {
        withCredentials: true,
        headers: {
            'api-key': `${environment.apiKey}`,
        },
        // из урока - не работает!
        // headers: new HttpHeaders().append('apiKey', environment['apiKey']),
    }

    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http
            .get<UserResponse>(`${environment.baseNetworkUrl}/users`, this.httpOptions)
            .pipe(map(el => el.items))
    }
}