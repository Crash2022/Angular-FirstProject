export interface Notification {
    message: string
    type: NotificationType
}

export type NotificationType = 'error' | 'success' | 'info' | 'warning'
