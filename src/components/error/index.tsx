import ReactJson from "react-json-view";
import "./index.scss";

export const Error = ({ ...rest }) => {
  return (
    <div className="error-container">
      {rest.code ? (
        <div>
          {+rest.code === 500 ? (
            <div className="error-title">ERROR: 服务器错误</div>
          ) : null}
          {+rest.code >= 400 && +rest.code < 500 ? (
            <div className="error-title">ERROR: 客户端错误</div>
          ) : null}
          <ReactJson src={rest} />
        </div>
      ) : (
        <ReactJson src={rest} />
      )}
    </div>
  );
};
