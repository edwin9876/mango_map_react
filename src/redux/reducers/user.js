import {
    CREATE_USER,
    FETCH_ALLUSER,
    FETCH_USER,
    UPDATE_USER,
    REMOVE_USER,
    CREATE_FAVBLOG,
    REMOVE_FAVBLOG,
    CREATE_USERDISTRICT,
    REMOVE_USERDISTRICT,
    CREATE_USERCHAT,
    REMOVE_USERCHAT,
    CREATE_USERCHATRECORD
} from '../constants/action-types'

const initialUserState = {
    users:[],
    user:[]
}

const userReducer = (state=initialUserState,action) =>{
    switch (action.type){
        case FETCH_ALLUSER:
            return {
                ...state,
                users:[...action.payload]
            }
        case FETCH_USER:
            return {
                ...state,
                user:[...action.payload]
            }
        case CREATE_USER:
            return {
                ...state
            }
        case CREATE_FAVBLOG:
            return {
                ...state
            }
        case CREATE_USERDISTRICT:
            return {
                ...state
            }
        case CREATE_USERCHAT:
            return {
                ...state
            }
        case CREATE_USERCHATRECORD:
            return {
                ...state
            }

    }
}

export default userReducer
