import { Component, OnInit } from '@angular/core'
import { NotificationService } from '../../../core/services/notification.service'
import { Observable } from 'rxjs'

@Component({
    selector: 'todolist-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnInit {
    notification$?: Observable<Notification | null>

    constructor(private notificationService: NotificationService) {}

    ngOnInit() {
        // subscribe
        this.notification$ = this.notificationService.notification$
    }
}
