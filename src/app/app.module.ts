import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingRoutingModule } from './app-routing-routing.module'
import { CredentialsInterceptor } from './core/interceptors/credentials.interceptor'
import { HomeModule } from './home/home.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ProfileModule } from './profile/profile.module'
import { TodosModule } from './todos/todos.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingRoutingModule,
        HomeModule,
        AuthModule,
        UsersModule,
        ProfileModule,
        TodosModule,
        SharedModule,
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],

    bootstrap: [AppComponent],
})
export class AppModule {}
