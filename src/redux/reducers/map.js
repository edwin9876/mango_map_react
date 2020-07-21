import {
    CREATE_DISTRICT,
    UPDATE_DISTRICT,
    REMOVE_DISTRICT,
    FETCH_DISTRICT,
    FETCH_ALLDISTRICT
} from '../constants/action-types'

const initialMapState =
{
    districts:[],
    district:[]
}

const mapReducer = (state=initialMapState,action)=>{
    switch (action.type){
        case FETCH_ALLDISTRICT:
            return {
                ...state,
                districts:[...action.payload]
            }
        case FETCH_DISTRICT:
            return {
                ...state,
                district:[...action.payload]
            }
        case CREATE_DISTRICT:
            return {
                ...state,
            }
    }
}

export default mapReducer
