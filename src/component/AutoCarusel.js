import React from 'react'
import './css/AutoCarusel.css'
import Data from '../test-data/gropbuyData copy'
import TotalProgressBar from './TotalProgressBar'
import GroupOnsaleTag from './GroupOnsaleTag'
export default class AutoCarusel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: Data,
      isPrevious: 1,
      isNext: 12,
      isLeftEnd: true,
      isRightEnd: false,
      isHover: false,
    }
    this.caruselTimer = this.caruselTimer.bind(this)
  }
  componentDidMount() {
    setInterval(this.caruselTimer, 5000)
  }
  caruselTimer() {
    let { isPrevious, isNext } = this.state

    this.setState({ isPrevious: isPrevious + 1 })
  }
  componentDidUpdate() {
    let { isPrevious } = this.state
    if (isPrevious > 12) {
      this.setState({ isPrevious: 1, isNext: 12 })
    }
  }
  componentWillUnmount() {
    clearInterval(this.caruselTimer)
  }
  Previous() {
    let { isNext, isPrevious, isEnd, foucsItem } = this.state
    if (isPrevious !== 0) {
      this.setState(
        {
          isPrevious: isPrevious - 1,
          foucsItem: isPrevious,
          isNext: isNext + 1,
          clickDot: false,
          isRightEnd: false,
        },
        () => {
          console.log(isPrevious)
        }
      )
    }
    if (isPrevious - 1 === 0) {
      this.setState(
        {
          clickDot: false,
          isLeftEnd: true,
          isRightEnd: false,
          isPrevious: 12,
          isNext: 1,
        },
        () => {
          console.log(isPrevious)
        }
      )
    }
  }
  next() {
    let { isNext, isPrevious, isRightEnd } = this.state
    if (isNext !== 0) {
      this.setState(
        {
          isPrevious: isPrevious + 1,
          foucsItem: isPrevious,

          isNext: isNext - 1,
          isLeftEnd: false,
        },
        () => {
          console.log(isNext)
        }
      )
    }
    if (isNext - 1 === 0) {
      this.setState(
        {
          clickDot: false,
          isLeftEnd: false,
          isRightEnd: true,
          isPrevious: 1,
          isNext: 12,
        },
        () => {
          console.log(isNext)
        }
      )
    }
  }
  HoverHandler() {
    this.setState(
      {
        isHover: true,
      },
      () => console.log('hover')
    )
  }
  HoverHandlerMouseOut() {
    this.setState(
      {
        isHover: false,
      },
      () => console.log('exit')
    )
  }
  HandleClick(index) {
    const { isPrevious, isNext } = this.state
    console.log(`index: ${index} `)
    if (index === 1) {
      this.setState({ isPrevious: index, isNext: 14 - (index + 1) }, () =>
        console.log(`index: ${index} 角度: ${isPrevious}`)
      )
    } else if (index === 14) {
      this.setState({ isPrevious: index - 2, isNext: 1 }, () =>
        console.log(`index: ${index} 角度: ${isPrevious}`)
      )
    } else {
      this.setState({ isPrevious: index, isNext: 13 - index }, () =>
        console.log(`index: ${index} 角度: ${isPrevious}`)
      )
    }
  }
  dotClass(index) {
    const { isHover, item, isPrevious, dir, isLeftEnd, isRightEnd } = this.state

    console.log(`isPrevious :${isPrevious} index ${index}`)
    if (index > 12) {
      return
    }
    if (index === isPrevious) {
      return 'AutoCarusel-index-dot' + ' ' + 'isActive'
    } else {
      return 'AutoCarusel-index-dot'
    }
  }
  render() {
    const { isHover, item, isPrevious, isLeftEnd, isRightEnd } = this.state
    let dir = 840
    console.log(`state: ${isLeftEnd} ${isRightEnd}`)
    const transfromHandle = {
      transition: 'all ease-in-out 0.5s',
      transform: `translateX(-${dir * isPrevious}px)`,
    }
    const transfromEnd = {
      transition: 'all ease-in-out 0.5s',
      transform: `translateX(-${dir * isPrevious}px)`,
    }
    return (
      <div
        className="AutoCarusel"
        onMouseEnter={() => this.HoverHandler()}
        onMouseLeave={() => this.HoverHandlerMouseOut()}
      >
        <div className="AutoCarusel-container-warrpar">
          <div
            className="AutoCarusel-container"
            style={isRightEnd || isLeftEnd ? transfromEnd : transfromHandle}
          >
            <ul className="AutoCarusel-list">
              {item.map((items) => (
                <li
                  className="AutoCarusel-list-item"
                  //  style={listItem}
                  key={items.id}
                >
                  <div className="AutoCarusel-list-item-container">
                    <a href={`${items.url}`} className="ImageCarusel-link">
                      <div className="AutoCarusel-item-container">
                        <div
                          className="AutoCarusel-item-image"
                          style={{
                            backgroundImage: `url(
                             ${items.img}
                            )`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom center',
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="AutoCarusel-index-container">
          <ul className="AutoCarusel-index-list">
            {item.map((items) => (
              <li className="AutoCarusel-index-list-item" key={items.id}>
                <div
                  className={this.dotClass(items.id)}
                  onClick={() => this.HandleClick(items.id)}
                ></div>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => {
            this.Previous()
            console.log('sdasd')
          }}
          className={
            isHover
              ? 'AutoCarusel-fab-left'
              : 'AutoCarusel-fab-left' + ' ' + 'AutoCarusel-fab_out'
          }
        >
          &lt;
        </div>
        <div
          onClick={() => this.next()}
          className={
            isHover
              ? 'AutoCarusel-fab-right'
              : 'AutoCarusel-fab-right' + ' ' + 'AutoCarusel-fab_out'
          }
        >
          &gt;
        </div>
      </div>
    )
  }
}
