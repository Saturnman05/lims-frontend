import PropTypes from "prop-types";
import { ConfigProvider, Breadcrumb } from "antd";
import "../../../styles/wrappers/page-wrapper/index.css";

export function PageWrapper(props) {
  const { breadCrumbItems, children } = props;
  return (
    <ConfigProvider
      theme={{
        components: { Breadcrumb: { separatorColor: "rgba(22, 217, 206)" } },
      }}>
      <div className="page-wrapper">
        <div>
          <Breadcrumb items={breadCrumbItems} />
        </div>
        <div className="page-wrapper-children overflow-y-scroll w-full">
          {children}
        </div>
      </div>
    </ConfigProvider>
  );
}

PageWrapper.propTypes = {
  breadCrumbItems: PropTypes.array,
  children: PropTypes.node.isRequired,
};
