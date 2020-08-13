import React from 'react'
import './css/BuyCar.css'
export default class BuyCar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <svg className="svg-icon" viewBox="0 0 26.6 25.6">
        <polyline
          fill="#fff"
          points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2.5"
        ></polyline>
        <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
        <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
      </svg>
    )
  }
}
