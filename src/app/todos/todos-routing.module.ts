import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TodosComponent } from './components/todos/todos.component'
import { AuthGuard } from '../guards/auth.guard'

// здесь надо убрать путь '' для LazyLoading
const routes: Routes = [{ path: '', component: TodosComponent, canActivate: [AuthGuard] }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TodosRoutingModule {}
