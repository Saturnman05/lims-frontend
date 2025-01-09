import PropTypes from "prop-types";
import { ConfigProvider, Breadcrumb } from "antd";

export function PageWrapper (props) {
  const { breadCrumbItems, children } = props;
  return (
    <ConfigProvider
      theme={{
        components: { Breadcrumb: { separatorColor: "rgba(22, 217, 206)" } },
      }}>
      <Breadcrumb
        items={breadCrumbItems}
      />
      {children}
    </ConfigProvider>
  );
}

PageWrapper.propTypes = {
  breadCrumbItems: PropTypes.array,
  children: PropTypes.node.isRequired,
}