import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environments'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface ProfileResponse {
    aboutMe?: string
    contacts: Contacts
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    fullName: string
    userId: number
    photos: {
        small?: string
        large?: string
    }
}

interface Contacts {
    facebook?: any
    website?: any
    vk?: any
    twitter?: any
    instagram?: any
    youtube?: any
    github?: any
    mainLink?: any
}

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    httpOptions = {
        withCredentials: true,
        headers: {
            'api-key': `${environment.apiKey}`,
        },
        // из урока - не работает!
        // headers: new HttpHeaders().append('apiKey', environment['apiKey']),
    }

    constructor(private http: HttpClient) {}

    getProfile(userId: number): Observable<ProfileResponse> {
        return this.http.get<ProfileResponse>(
            `${environment.baseNetworkUrl}/profile/${userId}`,
            this.httpOptions
        )
    }
}
