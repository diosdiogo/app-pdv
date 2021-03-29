/**
 * Action types
 */
export enum AccessTypes {
    UPDATE_REQUEST = '@access/UPDATE_REQUEST',
    UPDATE_SUCCESS = '@access/UPDATE_SUCCESS',
    UPDATE_FAILURE = '@access/UPDATE_FAILURE',
    UPDATE_FIELD = '@access/UPDATE_FIELD',
    RESET_STATE= '@access/RESET_STATE'
}

/**
 * Data types
 */
export interface Access {
    access: string
    matriz: number
    empresa: number
   
}

/**
 * State type
 */
export interface AccessState {
    readonly data: Access
    readonly loading: boolean
    readonly error: boolean
}