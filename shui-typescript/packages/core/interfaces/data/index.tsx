export interface AuthResponse {
    success : boolean,
    message : string,
    token : string

}

export interface NoteResponse {
    notes : Note[]
}

export interface Note {
    createdAt : string,
    username : string,
    title : string,
    text : string,
    id: string
}

export interface User {
    username : string,
    password : string
}

export interface UserState {
    username : string | null,
    token : string | null
}