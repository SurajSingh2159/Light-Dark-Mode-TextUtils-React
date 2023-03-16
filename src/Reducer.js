import { createReducer } from "@reduxjs/toolkit";

const initialState = {
      alert: null,
}

export const customReducer = createReducer(initialState, {

      showAlert: (message, type)=>{
            setAlert({
                  msg: message,
                  type: type
              })
              setTimeout(() => {
                setAlert(null);
              }, 1500);
      },
})