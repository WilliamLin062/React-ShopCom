import React from 'react'
import './css/Timer.css'
export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      styleObj: {
        0: {
          dir: 0,
        },
        1: { dir: -1.2 },
        2: { dir: -2.4 },
        3: { dir: -3.6 },
        4: { dir: -4.8 },
        5: { dir: -6 },
        6: { dir: -7.2 },
        7: { dir: -8.4 },
        8: { dir: -9.6 },
        9: { dir: -10.8 },
      },
      Second: this.props.Seconds,
      tensDigitHour: 0,
      unitsDigitHour: 0,
      tensDigitMinute: 0,
      unitsDigitMinute: 0,
      tensDigitSecond: 0,
      unitsDigitSecond: 0,
      timesUp: false,
    }
  }

  componentDidMount() {
    console.log('Timer')
    const {
      tensDigitHour,
      unitsDigitHour,
      tensDigitMinute,
      unitsDigitMinute,
      tensDigitSecond,
      unitsDigitSecond,
      timesUp,
    } = this.state

    /*  console.log(
      `hour ${tensDigitHour}${unitsDigitHour} Minute ${tensDigitMinute}${unitsDigitMinute} second ${tensDigitSecond}${unitsDigitSecond} TimesUP`
    )*/
    if (timesUp === true) {
      clearInterval()
    }

    this.timer()
  }
  /*角度從0到-171，19的倍數*/
  /*timer() {
    console.log('count start')
    let {
      tensDigitHour,
      unitsDigitHour,
      tensDigitMinute,
      unitsDigitMinute,
      tensDigitSecond,
      unitsDigitSecond,
      timesUp,
    } = this.state
    if (timesUp !== true) {
      setInterval(() => {
        if (unitsDigitSecond !== 0) {
          this.setState(
            {
              unitsDigitSecond: unitsDigitSecond--,
            },
            () => {
              console.log(
                `hour ${tensDigitHour}${unitsDigitHour} Minute ${tensDigitMinute}${unitsDigitMinute} second ${tensDigitSecond}${unitsDigitSecond}`
              )
            }
          )
        } else if (tensDigitSecond !== 0 && unitsDigitSecond === 0) {
          this.setState(
            {
              tensDigitSecond: tensDigitSecond--,
              unitsDigitSecond: 9,
            },
            () => {
              console.log(
                `hour ${tensDigitHour}${unitsDigitHour} Minute ${tensDigitMinute}${unitsDigitMinute} second ${tensDigitSecond}${unitsDigitSecond}`
              )
            }
          )
        } else if (tensDigitSecond === 0 && unitsDigitMinute !== 0) {
          this.setState(
            {
              unitsDigitMinute: unitsDigitMinute--,
              tensDigitSecond: 9,
            },
            () => {
              console.log(
                `hour ${tensDigitHour}${unitsDigitHour} Minute ${tensDigitMinute}${unitsDigitMinute} second ${tensDigitSecond}${unitsDigitSecond}`
              )
            }
          )
        } else if (unitsDigitMinute !== 0) {
          this.setState(
            {
              unitsDigitMinute: unitsDigitMinute--,
            },
            () => {
              console.log(
                `hour ${tensDigitHour}${unitsDigitHour} Minute ${tensDigitMinute}${unitsDigitMinute} second ${tensDigitSecond}${unitsDigitSecond}`
              )
            }
          )
        } else if (tensDigitMinute !== 0 && unitsDigitMinute === 0) {
          this.setState(
            {
              tensDigitMinute: tensDigitMinute--,
              unitsDigitMinute: 9,
            },
            () => {
              console.log(
                `hour ${tensDigitHour}${unitsDigitHour} Minute ${tensDigitMinute}${unitsDigitMinute} second ${tensDigitSecond}${unitsDigitSecond}`
              )
            }
          )
        } else if (tensDigitMinute === 0 && unitsDigitMinute !== 0) {
          this.setState(
            {
              tensDigitMinute: tensDigitMinute--,
              unitsDigitMinute: 9,
            },
            () => {
              console.log(
                `hour ${tensDigitHour}${unitsDigitHour} Minute ${tensDigitMinute}${unitsDigitMinute} second ${tensDigitSecond}${unitsDigitSecond}`
              )
            }
          )
        } else if (tensDigitMinute === 0) {
          this.setState(
            {
              unitsDigitHour: unitsDigitHour--,
              tensDigitMinute: 9,
            },
            () => {
              console.log(
                `hour ${tensDigitHour}${unitsDigitHour} Minute ${tensDigitMinute}${unitsDigitMinute} second ${tensDigitSecond}${unitsDigitSecond}`
              )
            }
          )
        } else if (unitsDigitHour === 0) {
          this.setState(
            {
              tensDigitHour: tensDigitHour--,
              unitsDigitHour: 9,
            },
            () => {
              console.log(
                `hour ${tensDigitHour}${unitsDigitHour} Minute ${tensDigitMinute}${unitsDigitMinute} second ${tensDigitSecond}${unitsDigitSecond}`
              )
            }
          )
        } else if (unitsDigitHour === 0 && tensDigitHour === 0) {
          this.setState(
            {
              timesUp: true,
            },
            () => {
              console.log(
                `hour ${tensDigitHour}${unitsDigitHour} Minute ${tensDigitMinute}${unitsDigitMinute} second ${tensDigitSecond}${unitsDigitSecond} TimesUP`
              )
            }
          )
        }
      }, 1000)
    }
  }*/
  timer() {
    console.log('count start')
    let {
      tensDigitHour,
      unitsDigitHour,
      tensDigitMinute,
      unitsDigitMinute,
      tensDigitSecond,
      unitsDigitSecond,
      Second,
    } = this.state
    if (Second !== 0) {
      setInterval(() => {
        this.setState(
          {
            Second: Second--,
          },
          () => {
            //console.log(Second)
          }
        )
        this.translateTime()
      }, 1000)
    }
  }
  translateTime() {
    let {
      tensDigitHour,
      unitsDigitHour,
      tensDigitMinute,
      unitsDigitMinute,
      tensDigitSecond,
      unitsDigitSecond,
      styleObj,
      number,
    } = this.state
    let { m, h, s } = 0
    s = (this.state.Second % 60) % 60
    m = Math.floor((this.state.Second / 60) % 60)
    h = Math.floor(this.state.Second / 60 / 60)

    this.setState({
      tensDigitHour: Math.floor(h / 10),
      unitsDigitHour: Math.floor(h % 10),
      tensDigitMinute: Math.floor(m / 10),
      unitsDigitMinute: Math.floor(m % 10),
      tensDigitSecond: Math.floor(s / 10),
      unitsDigitSecond: s % 10,
    })
  }
  render() {
    const {
      tensDigitHour,
      unitsDigitHour,
      tensDigitMinute,
      unitsDigitMinute,
      tensDigitSecond,
      unitsDigitSecond,
      number,
      styleObj,
    } = this.state
    //---------------------------------------
    const tensDigitHourStyle = {
      transform: `translateY(${
        styleObj[number.indexOf(tensDigitHour)].dir
      }rem)`,
    }
    const unitsDigitHourStyle = {
      transform: `translateY(${
        styleObj[number.indexOf(unitsDigitHour)].dir
      }rem)`,
    }
    //---------------------------------------
    //---------------------------------------
    const tensDigitMinuteStyle = {
      transform: `translateY(${
        styleObj[number.indexOf(tensDigitMinute)].dir
      }rem)`,
    }
    const unitsDigitMinuteStyle = {
      transform: `translateY(${
        styleObj[number.indexOf(unitsDigitMinute)].dir
      }rem)`,
    }
    //---------------------------------------
    const tensDigitSecondStyle = {
      transform: `translateY(${
        styleObj[number.indexOf(tensDigitSecond)].dir
      }rem)`,
    }

    const unitsDigitSecondStyles = {
      transform: `translateY(${
        styleObj[number.indexOf(unitsDigitSecond)].dir
      }rem)`,
    }
    /********************************************** */
    return (
      <div className="timer-container">
        <div className="timer-number-container">
          <div className="timer-number" style={tensDigitHourStyle}>
            {number.map((num) => (
              <div
                className="timer-number-box"
                style={{
                  transform: `translateY(${
                    styleObj[number.indexOf(tensDigitHour)]
                  }px)`,
                }}
                key={number.indexOf(num)}
              >
                <div className="timer-number-text">{num}</div>
              </div>
            ))}
          </div>
          <div className="timer-number" style={unitsDigitHourStyle}>
            {number.map((num) => (
              <div className="timer-number-box" key={number.indexOf(num)}>
                <div className="timer-number-text">{num}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="timer-dot-container">.</div>
        <div className="timer-number-container">
          <div className="timer-number" style={tensDigitMinuteStyle}>
            {number.map((num) => (
              <div className="timer-number-box" key={number.indexOf(num)}>
                <div className="timer-number-text">{num}</div>
              </div>
            ))}
          </div>
          <div className="timer-number" style={unitsDigitMinuteStyle}>
            {number.map((num) => (
              <div className="timer-number-box" key={number.indexOf(num)}>
                <div className="timer-number-text">{num}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="timer-dot-container">.</div>
        <div className="timer-number-container">
          <div className="timer-number" style={tensDigitSecondStyle}>
            {number.map((num) => (
              <div className="timer-number-box" key={number.indexOf(num)}>
                <div className="timer-number-text">{num}</div>
              </div>
            ))}
          </div>
          <div className="timer-number " style={unitsDigitSecondStyles}>
            {number.map((num) => (
              <div className="timer-number-box" key={number.indexOf(num)}>
                <div className="timer-number-text">{num}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
