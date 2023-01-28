import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
    selector: 'first-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    })

    constructor() {
        // code
    }

    ngOnInit(): void {
        // code
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.loginForm.value)
    }
}
