import { DemoPageState } from 'model/demo'
import { DEMO_COUNTER_MINUS_ONE, DEMO_COUNTER_PLUS_ONE } from './constant'

export default function demoReducer(state = {} as DemoPageState, action: any) {
  switch (action.type) {
    case DEMO_COUNTER_PLUS_ONE:
      return {
        ...state,
        count: state.count + 1
      }
    case DEMO_COUNTER_MINUS_ONE:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}