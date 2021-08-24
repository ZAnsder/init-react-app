import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from 'store/reducers'
import { DEMO_COUNTER_MINUS_ONE, DEMO_COUNTER_PLUS_ONE } from './constant'

const counterMinusOneAction = () => ({
  type: DEMO_COUNTER_MINUS_ONE
})
const counterPlusOneAction = () => ({
  type: DEMO_COUNTER_PLUS_ONE
})

export function useCounterMinusOne() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootStore) => state.demo.count);
  const bindCounterMinusAction = useCallback(() => dispatch(counterMinusOneAction()), [dispatch]);
  const bindCounterPlusAction = useCallback(() => dispatch(counterPlusOneAction()), [dispatch]);

  return {
    count,
    counterMinusOne: bindCounterMinusAction,
    counterPlusOne: bindCounterPlusAction
  };
}