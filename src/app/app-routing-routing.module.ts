import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './shared/components/not-found/not-found.component'
import { HomeComponent } from './home/components/home/home.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'page-not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'page-not-found' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
