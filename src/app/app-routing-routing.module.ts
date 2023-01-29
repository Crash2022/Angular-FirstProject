import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { TodosComponent } from './pages/todos/todos.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { HomeComponent } from './pages/home/home.component'
import { UsersComponent } from './pages/users/users.component'
import { ProfileComponent } from './pages/profile/profile.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'todos', component: TodosComponent },
    { path: 'users', component: UsersComponent },
    { path: 'profile/:userId', component: ProfileComponent },
    { path: 'page-not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'page-not-found' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
