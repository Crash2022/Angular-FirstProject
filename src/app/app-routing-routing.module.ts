import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
// import { NotFoundComponent } from './shared/components/not-found/not-found.component'

// without LazyLoading
// const routes: Routes = []

// LazyLoading
const routes: Routes = [
    // { path: 'page-not-found', component: NotFoundComponent },
    // { path: '**', redirectTo: 'page-not-found' },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'todos',
        loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule),
    },
]

@NgModule({
    // imports: [RouterModule.forRoot(routes)],

    // для LazyLoading: сперва загружается основное, а потом в фоне остальные компоненты
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
