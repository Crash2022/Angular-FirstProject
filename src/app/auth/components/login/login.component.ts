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
            // Validators.email,
            Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,5}$'),
            // Validators.pattern(/gmail.com/),
        ]),

        password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
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
