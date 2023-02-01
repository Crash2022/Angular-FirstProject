export interface ErrorNotification {
    message: string
    type: NotificationType
}

export type NotificationType = 'error' | 'success' | 'info' | 'warning'
