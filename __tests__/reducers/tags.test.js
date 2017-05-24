var tags = require('../../src/app/main/reducers/tags')
import * as Action from '../../src/app/main/action'

describe('Tags reducers', () => {
  
  test('TagsLoaded should return the list of tags', () => {
    const state = tags({}, {type: Action.TagsLoaded, payload: [{tag:'yo', pomodori:2, duration:120000}]})
    expect(state.tags).toHaveLength(1)
  })
})
