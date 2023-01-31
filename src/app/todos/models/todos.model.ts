export interface Todolist {
    addedDate: string
    id: string
    order: number
    title: string
}

export interface DomainTask {
    [key: string]: TaskAPIType[]
}

export interface TaskAPIType extends UpdateTaskModelType {
    todoListId: string
    id: string
    order: number
    addedDate: string
    // берем типы (наследуемся) от другого типа
    // title: string
    // status: TaskStatusEnum
    // priority: TaskPriorities
    // description: string
    // startDate: string
    // deadline: string
}

export enum TaskStatusEnum {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3,
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4,
}

export interface UpdateTaskModelType {
    title: string
    status: TaskStatusEnum
    priority: TaskPriorities
    description: string
    startDate: string
    deadline: string
}
