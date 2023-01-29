export interface UserResponse {
    items: User[]
    totalCount: number
}

export interface User {
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
