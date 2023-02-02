import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingRoutingModule } from './app-routing-routing.module'
import { AuthModule } from './auth/auth.module'
import { TodosModule } from './todos/todos.module'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingRoutingModule,
        SharedModule,
        CoreModule,
        // необходимо убрать для LazyLoading
        // AuthModule,
        // TodosModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
