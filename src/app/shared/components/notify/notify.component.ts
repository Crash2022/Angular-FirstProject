import { Component, OnInit } from '@angular/core'
import { NotificationService } from '../../../core/services/notification.service'
import { Observable } from 'rxjs'
import { ErrorNotification } from '../../../core/models/notify.model'

@Component({
    selector: 'todolist-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnInit {
    notify$: Observable<ErrorNotification | null>

    constructor(private notificationService: NotificationService) {
        this.notify$ = this.notificationService.notify$$
    }

    ngOnInit() {
        // subscribe
        // this.notify$ = this.notificationService.notify$$
    }

    closeNotification() {
        this.notificationService.clearNotification()
    }
}
