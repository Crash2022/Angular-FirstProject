import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'first-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
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

    get email() {
        return this.loginForm.get('email')
    }
    get password() {
        return this.loginForm.get('password')
    }
}
