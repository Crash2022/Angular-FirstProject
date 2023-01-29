import { Component, OnInit } from '@angular/core'
import { AuthService } from './core/services/auth.service'

@Component({
    selector: 'first-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.authMe()
    }
}
