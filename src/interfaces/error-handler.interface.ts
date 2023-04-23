interface Errors {
    code?: string,
    message?: string
}

export interface ErrorBody {
    error_id?: number,
    error?: Errors
}