import React from 'react'
import './css/GroupOnsaleTag.css'
export default class GroupOnsaleTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      group: this.props.group,
    }
  }

  componentDidMount() {}
  render() {
    const { group } = this.state
    return (
      <div className="gropbuy-item-tag">
        <div className="gropbuy-item-tag-icon">G</div>
        <div className="gropbuy-item-tag-text-box">
          <div className="gropbuy-item-tag-text">{group}人成團價</div>
        </div>
      </div>
    )
  }
}
