import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: ["Cars", "Houses", "Accessories"]
}

const carslice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars
export default carslice.reducer