import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { TodosComponent } from './pages/todos/todos.component'
import { LoginComponent } from './pages/login/login.component'
import { AppRoutingRoutingModule } from './app-routing-routing.module'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { HomeComponent } from './pages/home/home.component'
import { UsersComponent } from './pages/users/users.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { CredentialsInterceptor } from './interceptors/credentials.interceptor';
import { NavigationComponent } from './pages/navigation/navigation.component'

@NgModule({
    declarations: [
        AppComponent,
        TodosComponent,
        LoginComponent,
        NotFoundComponent,
        HomeComponent,
        UsersComponent,
        ProfileComponent,
        NavigationComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingRoutingModule,
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],

    bootstrap: [AppComponent],
})
export class AppModule {}
