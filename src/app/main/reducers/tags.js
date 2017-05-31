import moment from 'moment'
import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.TagsLoaded]: (state, action) => ({ 
    tags: action.payload.map(t => ({tag: t.tag, pomodori: t.pomodori, duration: moment.duration(t.duration).humanize()}))
  })
})