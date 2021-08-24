import { FC } from 'react'
import './index.scss'

interface NoDataProps {
  minHeight?: string;
}
const NoData: FC<NoDataProps> = ({ minHeight }) => {
  return (
    <div
      className="nodata-container"
      style={{ minHeight }}
    >
      <div>
        <i className="ladyn ladyn-wushuju" />
      </div>
      <span className="text">暂无数据</span>
    </div>
  );
};

NoData.defaultProps = {
  minHeight: "auto",
};
export default NoData;
