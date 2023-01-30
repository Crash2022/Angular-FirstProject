import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingRoutingModule } from './app-routing-routing.module'
import { HomeModule } from './home/home.module'
// import { AuthModule } from './auth/auth.module'
// import { UsersModule } from './users/users.module'
import { ProfileModule } from './profile/profile.module'
// import { TodosModule } from './todos/todos.module'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingRoutingModule,
        HomeModule,
        // необходимо убрать для LazyLoading
        // AuthModule,
        // UsersModule,
        // TodosModule,
        ProfileModule,
        SharedModule,
        CoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
