import request from 'superagent'
import moment from 'moment'
import settings from 'settings'
import dispatcher from '../../../redux/dispatcher'
import * as Action from '../action'

export function getUsers(){
  return request.get(`${settings.host}/projections/latest-pomodori`)
    .then(res => {
      dispatcher.dispatch({type: Action.UsersLoaded, payload: res.body})
    })
    .catch(err => dispatcher.dispatch({type: Action.ApiError, payload: err}))
}

export function getTimers(userInfo){
  const today = moment().format('YYYY-MM-DD')
  return request.get(`${settings.host}/projections/pomodori-of-the-day?day=${today}&timer_id=${userInfo.timer_id}`)
    .then(res => {
      dispatcher.dispatch({type: Action.TimersLoaded, payload: res.body})
    })
    .catch(err => dispatcher.dispatch({type: Action.ApiError, payload: err}))
}

export function getTags(userInfo){
  const today = moment().format('YYYY-MM-DD')
  return request.get(`${settings.host}/projections/tags-of-the-day?day=${today}&timer_id=${userInfo.timer_id}`)
    .then(res => {
      dispatcher.dispatch({type: Action.TagsLoaded, payload: res.body})
    })
    .catch(err => dispatcher.dispatch({type: Action.ApiError, payload: err}))
}
