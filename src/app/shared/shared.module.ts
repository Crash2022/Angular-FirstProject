import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationComponent } from './components/navigation/navigation.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [NavigationComponent, NotFoundComponent],
    imports: [CommonModule, RouterModule],
    exports: [NavigationComponent, NotFoundComponent],
})
export class SharedModule {}
