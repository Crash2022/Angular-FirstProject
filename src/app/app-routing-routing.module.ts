import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
// import { NotFoundComponent } from './shared/components/not-found/not-found.component'

const routes: Routes = [
    // { path: 'page-not-found', component: NotFoundComponent },
    // { path: '**', redirectTo: 'page-not-found' },
    // LazyLoading
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'todos',
        loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule),
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            // для LazyLoading: сперва загружается основное, а потом в фоне остальные компоненты
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
