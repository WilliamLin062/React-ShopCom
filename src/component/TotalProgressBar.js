import React from 'react'
import './css/TotalProgressBar.css'
export default class TotalProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      widths: this.props.width,
      heights: this.props.heigth,
      text: this.props.totalText,
      barWidths: this.props.barWidths,
    }
  }

  componentDidMount() {}
  render() {
    const { widths, heights, text, barWidths } = this.state
    console.log(widths)
    console.log(heights)
    const styles = {
      width: `${widths}%`,
      height: `${heights}%`,
    }
    const total = {
      width: `${barWidths}%`,
    }
    return (
      <div className="TotalProgressBar" style={styles}>
        <div className="TotalProgressBar-warrpar">
          <div className="TotalProgressBar-text">已售出 {text}</div>
          <div className="TotalProgressBar-bar-container">
            <div className="TotalProgressBar-bar" style={total}></div>
          </div>
        </div>
      </div>
    )
  }
}
