// eslint-disable-next-line @typescript-eslint/ban-types
import { TaskAPIType } from '../../todos/models/todos.model'

// eslint-disable-next-line @typescript-eslint/ban-types
export interface BaseTodoResponse<T = {}> {
    data: T
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

export interface MeResponse {
    data: {
        id: number
        login: string
        email: string
    }
    messages: string[]
    fieldErrors: string[]
    resultCode: number
}

export enum ResultCodes {
    success = 0,
    error = 1,
    captcha = 10,
}

export interface TasksResponseType {
    items: TaskAPIType[]
    totalCount: number
    error: string | null
}

export interface LoginRequestData {
    email: string
    password: string
    rememberMe: boolean
}
