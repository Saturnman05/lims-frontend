import { Flex, Typography } from "antd"
import PropTypes from 'prop-types'

Desc.propTypes = {
  text: PropTypes.string.isRequired 
}

export function Desc (props) {
  const { text = "Text" } = props
  return (
    <Flex justify="center" align="center" style={{ height: "100%" }}>
      <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
        {text}
      </Typography.Title>
    </Flex>
  )
}