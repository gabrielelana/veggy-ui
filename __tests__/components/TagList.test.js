import React from 'react'
import renderer from 'react-test-renderer'
import TagList from '../../src/app/main/components/TagList'

describe('<TagList />', () => {
  
  it('should display tags', () => {
    const tags = [
      {tag: '#foo', pomodori: 4},
      {tag: '#bar', pomodori: 7},
      ]
    const component = renderer.create(<TagList tags={tags} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})