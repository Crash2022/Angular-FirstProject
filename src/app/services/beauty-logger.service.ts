import { Injectable } from '@angular/core'

type LoggerType = 'error' | 'success' | 'info' | 'warning'

@Injectable({
    providedIn: 'root',
})
export class BeautyLoggerService {
    logger(message: string, messageType: LoggerType) {
        console.log(`%c${message}`, this.getType(messageType))
    }

    getType(type: LoggerType) {
        switch (type) {
            case 'success':
                return 'background: green; color: white;'
            case 'info':
                return 'background: blue; color: white;'
            case 'error':
                return 'background: red; color: white;'
            case 'warning':
                return 'background: orange; color: black;'

            default:
                return ''
        }
    }
}
