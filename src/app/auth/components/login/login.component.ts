import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../../core/services/auth.service'

@Component({
    selector: 'todolist-login',
    templateUrl: './login.component.html',
    // стили можно брать из разных файлов одновременно
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm = new FormGroup({
        email: new FormControl<string>('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,5}$'),
            ],
        }),
        password: new FormControl<string>('', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(8)],
        }),
        rememberMe: new FormControl<boolean>(false, { nonNullable: true }),
    })

    constructor(private authService: AuthService) {
        // code
    }

    ngOnInit(): void {
        // code
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        const values = this.loginForm.value
        this.authService.login(values)
    }

    get email() {
        return this.loginForm.get('email')
    }
    get password() {
        return this.loginForm.get('password')
    }
}
