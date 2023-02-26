import { createSlice } from '@reduxjs/toolkit';

export const furnitureSlice = createSlice({
    name: 'counter',
    initialState:{
        selectedCategory:'Все категории'
    },
    reducers:{
        filterCategory:(state,action)=>{
            state.selectedCategory=action.payload;
        }
    }
})
export const getSelectedCategory=state=>state.counter.selectedCategory;
export const {filterCategory}=furnitureSlice.actions
export default furnitureSlice.reducer