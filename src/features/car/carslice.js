import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: ["", "", ""]
}

const carslice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars
export default carslice.reducer