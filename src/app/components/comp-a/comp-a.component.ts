import { Component, OnInit } from '@angular/core'
import { ValueService } from '../services/value.service'
import { Observable } from 'rxjs'
import { BeautyLoggerService } from '../services/beauty-logger.service'

@Component({
    selector: 'first-comp-a',
    templateUrl: './comp-a.component.html',
    styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
    value$ = new Observable()

    constructor(
        private valueService: ValueService,
        private beautyLoggerService: BeautyLoggerService
    ) {}

    ngOnInit(): void {
        // this.value = this.valueService.value
        this.valueService.value$.subscribe(value => {
            this.value$ = this.valueService.value$
        })
    }

    incrementValue() {
        this.valueService.increment()
    }
    // decrementValue() {
    //     this.valueService.decrement()
    // }
    addValue() {
        // console.log('value was added')
        // console.log('%cCode working', 'background: red; color: yellow; font-size: x-large')
        this.beautyLoggerService.logger('addError', 'error')
        this.beautyLoggerService.logger('addSuccess', 'success')
        this.beautyLoggerService.logger('addInfo', 'info')
        this.beautyLoggerService.logger('addWarning', 'warning')
    }
}
