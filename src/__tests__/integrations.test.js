import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'

import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('httple://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'Comment 1' },
      { name: 'Comment 2' },
      { name: 'Comment 3' }
    ]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch list of comments and display them', (done) => {
  // TODO: Attempt to render the *render* applyMiddleware
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  // TODO: Find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click')
  // TODO: Introduce a tiny pause for Moxios Library
  moxios.wait(() => {
    wrapped.update()
    // TODO: Expect to find a list of comments!
    expect(wrapped.find('li').length).toEqual(3)
    done();
    wrapped.unmount();
  })
})
