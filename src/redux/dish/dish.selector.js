import {createSelector} from "reselect";

export const selectDish=state=>state.dish;

export const selectData=createSelector(
    [selectDish],
    (state)=>state.collections
);