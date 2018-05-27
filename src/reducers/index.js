import { combineReducers } from 'redux'

import CommentsReducer from 'reducers/CommentsReducer'
import AuthReducer from 'reducers/AuthReducer'

export default combineReducers({
  comments: CommentsReducer,
  auth: AuthReducer
})
