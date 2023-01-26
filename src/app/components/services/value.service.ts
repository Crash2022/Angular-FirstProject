import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ValueService {
    // value = 0
    // value$ = new BehaviorSubject<number>(0)
    value$: BehaviorSubject<number> = new BehaviorSubject(0)

    increment() {
        // this.value = this.value + 1
        this.value$.next(this.value$.getValue() + 1)
    }
    decrement() {
        // this.value = this.value - 1
        this.value$.next(this.value$.getValue() - 1)
    }
}
