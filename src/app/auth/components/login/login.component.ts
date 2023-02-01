import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'todolist-login',
    templateUrl: './login.component.html',
    // стили можно брать из разных файлов одновременно
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,5}$'),
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.pattern('[a-zA-Z ]*'),
            Validators.minLength(8),
        ]),
        rememberMe: new FormControl(false),
    })

    constructor() {
        // code
    }

    ngOnInit(): void {
        // code
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        const value = this.loginForm.value
        console.warn(value)
    }

    get email() {
        return this.loginForm.get('email')
    }
    get password() {
        return this.loginForm.get('password')
    }
}
