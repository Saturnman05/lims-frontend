import PropTypes from "prop-types";
import { ConfigProvider, Breadcrumb } from "antd";

export function PageWrapper (props) {
  const { breadCrumbItems, children } = props;
  return (
    <ConfigProvider
      theme={{
        components: { Breadcrumb: { separatorColor: "rgba(22, 217, 206)" } },
      }}>
      <div className="flex flex-col w-full">
        <div>
          <Breadcrumb items={breadCrumbItems} />
        </div>
        <div className="flex">
          {children}
        </div>
      </div>
    </ConfigProvider>
  );
}

PageWrapper.propTypes = {
  breadCrumbItems: PropTypes.array,
  children: PropTypes.node.isRequired,
}