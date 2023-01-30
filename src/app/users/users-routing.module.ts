import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UsersComponent } from './components/users/users.component'

// здесь надо убрать путь '' для LazyLoading
const routes: Routes = [{ path: '', component: UsersComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
