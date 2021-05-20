import dish_data from "./dish.data";

const INTIAL_STATE={
    collections:dish_data
}

const dishReducer=(state=INTIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default dishReducer;