import React from 'react'

import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

export default () => {
  return (
    <div>
      I am the app component
      <CommentBox />
      <CommentList />
      <CommentList />
    </div>
  )
}
