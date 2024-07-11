import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk('/users/remove', async () => {
const response = await axios.delete(`http://localhost:3005/users/${user.id}`)
    return response.data
});

export { remo   veUser };