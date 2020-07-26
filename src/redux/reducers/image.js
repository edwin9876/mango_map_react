import {
    FETCH_ALLIMAGE,
    FETCH_IMAGE
} from '../constants/actionTypes'

const initialImageState =
{
    images:[],
    image:[]
}

const imageReducer = (state = initialImageState, action) => {
    switch (action.type) {
        case FETCH_ALLIMAGE:
            return {
                ...state,
                images: [...action.payload]
            }
        case FETCH_IMAGE:
            return {
                ...state,
                image: [...action.payload]
            }

        default:
            return {
                ...state,
            }
    }
}

export default imageReducer
