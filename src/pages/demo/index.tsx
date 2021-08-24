import { useCounterMinusOne } from 'store/demo/action'
import './index.scss'

export default function DemoPage() {
  const { count, counterMinusOne, counterPlusOne } = useCounterMinusOne();

  return (
    <div className="demo-counter-page">
      <h1>Counter</h1>
      <p>This is simple counter demo to show how Redux sync actions work.</p>
      <button className="btn-minus-one" onClick={counterMinusOne} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button className="btn-plus-one" onClick={counterPlusOne}>
        +
      </button>
    </div>
  );
}

export const demoRoute = {
  path: '',
  childRoutes: [{ path: 'demo', component: DemoPage }]
}