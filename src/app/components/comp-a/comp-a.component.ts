import { Component } from '@angular/core'
import { ValueService } from '../services/value.service'

@Component({
    selector: 'first-comp-a',
    templateUrl: './comp-a.component.html',
    styleUrls: ['./comp-a.component.scss'],
    providers: [ValueService],
})
export class CompAComponent {
    public test = 0
    constructor(private valueService: ValueService) {}
}
