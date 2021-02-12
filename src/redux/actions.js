export const authActions = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT', 
    login: (data= false) => ({
        type: authActions.LOGIN_REQUEST,
        payload: {data}
    }),
    logout: ()=>({type: authActions.LOGOUT})
}

export const OrderActions = {
    ADD_ITEM: 'ADD_ITEM',

}