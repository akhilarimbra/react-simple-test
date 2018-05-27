import CommentsReducer from 'reducers/CommentsReducer'
import { SAVE_COMMENT } from 'actions/types'

it('handles action of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  const newState = CommentsReducer([], action)
  expect(newState).toEqual(['New Comment'])
})

it('handles action with unknown type', () => {
  const newState = CommentsReducer([], {
    type: 'lorem'
  })
  expect(newState).toEqual([])
})
