import { Component } from '@angular/core'

@Component({
    selector: 'first-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    appTitle = 'My First Project'
    text = '123'

    changeTextHandler(event: Event) {
        this.text = (event.currentTarget as HTMLInputElement).value
    }
}
