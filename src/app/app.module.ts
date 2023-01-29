import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { TodosComponent } from './pages/todos/todos.component'
import { LoginComponent } from './pages/login/login.component'
import { ParentComponent } from './pages/parent/parent.component'
import { ChildComponent } from './pages/parent/child/child.component'
import { CompAComponent } from './pages/components/comp-a/comp-a.component'
import { CompBComponent } from './pages/components/comp-b/comp-b.component'
import { RoutingComponent } from './pages/routing/routing.component'
import { AppRoutingRoutingModule } from './app-routing-routing.module'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { HomeComponent } from './pages/home/home.component'
import { UsersComponent } from './pages/users/users.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { CredentialsInterceptor } from './interceptors/credentials.interceptor'

@NgModule({
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent,
        CompAComponent,
        CompBComponent,
        TodosComponent,
        LoginComponent,
        RoutingComponent,
        NotFoundComponent,
        HomeComponent,
        UsersComponent,
        ProfileComponent,
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
