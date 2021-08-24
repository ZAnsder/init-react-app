import { FC } from 'react'
import './index.scss'

interface LoadingProps {
  minHeight?: string;
}
const Loading: FC<LoadingProps> = ({ minHeight }) => {
  return (
    <div className="loading-container" style={{ minHeight }}>loading</div>
  );
};

Loading.defaultProps = {
  minHeight: "auto",
};
export default Loading;
