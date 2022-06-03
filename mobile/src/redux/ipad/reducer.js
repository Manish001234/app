import { GETIPADDATA } from "./action";

const initState = {

    Ipad : []
}

export const IpadReducer = (store = initState , {type , payload} ) => {

    switch(type){

        case GETIPADDATA:
        return {...store , Ipad : [...payload]}

        default :
        return store
    }
}