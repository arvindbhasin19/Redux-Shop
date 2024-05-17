import { configureStore } from '@reduxjs/toolkit'
import userDetail from './userDetail/userDetailSlice'


export default configureStore({
  reducer: {
    userDetail: userDetail
  },
})