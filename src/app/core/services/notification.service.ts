import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { ErrorNotification } from '../models/notify.model'

// пустой Injectable, чтобы каждый раз создавался новый инстанс класса
@Injectable()
export class NotificationService {
    private notify$ = new BehaviorSubject<ErrorNotification | null>(null)
    notify$$: Observable<ErrorNotification | null> = this.notify$.asObservable()

    handleError(message: string) {
        this.notify$.next({ type: 'error', message })
    }
    handleSuccess(message: string) {
        this.notify$.next({ type: 'success', message })
    }

    clearNotification() {
        this.notify$.next(null)
    }
}
