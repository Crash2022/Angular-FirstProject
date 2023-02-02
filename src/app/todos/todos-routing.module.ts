import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TodosComponent } from './components/todos/todos.component'
import { AuthGuard } from '../guards/auth.guard'

// without LazyLoading
const routes: Routes = [
    { path: 'todos', component: TodosComponent, pathMatch: 'full', canActivate: [AuthGuard] },
]

// LazyLoading
// const routes: Routes = [
//     { path: '', component: TodosComponent, pathMatch: 'full', canActivate: [AuthGuard] },
// ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TodosRoutingModule {}
