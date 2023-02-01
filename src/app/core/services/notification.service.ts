import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Notification } from '../models/notify.model'

@Injectable()
export class NotificationService {
    // any ?
    notification$ = new BehaviorSubject<any>(null)

    handleError(message: string) {
        this.notification$.next({ type: 'error', message })
    }
    handleSuccess(message: string) {
        this.notification$.next({ type: 'success', message })
    }

    clearNotification() {
        this.notification$.next(null)
    }
}
