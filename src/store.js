import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
      reducer: {
            custom: customReducer
      }
})

export default store