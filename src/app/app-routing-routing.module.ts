import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { TodosComponent } from './pages/todos/todos.component'

const routes: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'todos', component: TodosComponent },
    // { path: 'users', component: UsersComponent },
    // { path: 'profile', component: ProfileComponent },
    // { path: '404notfound', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
