import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { RouterModule } from '@angular/router'
import { NotifyComponent } from './components/notify/notify.component'

@NgModule({
    declarations: [NotFoundComponent, NotifyComponent],
    imports: [CommonModule, RouterModule],
    exports: [NotFoundComponent, NotifyComponent],
})
export class SharedModule {}
