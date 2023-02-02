import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component'

// without LazyLoading
const routes: Routes = [{ path: 'login', component: LoginComponent }]

// LazyLoading
// const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
