import {configureStore} from '@reduxjs/toolkit';
import todoRedcuer from './Features/todoSlice'
export const store = configureStore({
  reducer:todoRedcuer
})