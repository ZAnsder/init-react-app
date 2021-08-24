import { useDocumentTitle } from "utils/hook";

const NotFoundPage = () => {
  useDocumentTitle("页面丢失404");

  return <div className="not-found-page-container">404</div>;
};

export default NotFoundPage;
