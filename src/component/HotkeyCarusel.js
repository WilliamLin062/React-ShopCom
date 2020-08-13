import React from 'react'
import './css/HotkeyCarusel.css'
import Data from '../test-data/gropbuyData.json'
import TotalProgressBar from './TotalProgressBar'
import GroupOnsaleTag from './GroupOnsaleTag'
export default class HotkeyCarusel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: Data,
      isPrevious: 0,
      isNext: 2,
      isLeftEnd: true,
      isRightEnd: false,
    }
  }
  componentDidMount() {}
  Previous() {
    let { isNext, isPrevious, isEnd } = this.state
    if (isPrevious - 1 === 0) {
      this.setState(
        {
          isLeftEnd: true,
          isRightEnd: false,
        },
        () => {
          console.log(isPrevious)
        }
      )
    }
    if (isPrevious !== 0) {
      this.setState(
        {
          isPrevious: isPrevious - 1,
          isNext: isNext + 1,
          isRightEnd: false,
        },
        () => {
          console.log(isPrevious)
        }
      )
    }
  }
  next() {
    let { isNext, isPrevious, isRightEnd } = this.state
    if (isNext - 1 === 0) {
      this.setState(
        {
          isLeftEnd: false,
          isRightEnd: true,
        },
        () => {
          console.log(isNext)
        }
      )
    }
    if (isNext !== 0) {
      this.setState(
        {
          isPrevious: isPrevious + 1,
          isNext: isNext - 1,
          isLeftEnd: false,
        },
        () => {
          console.log(isNext)
        }
      )
    }
  }
  someData() {}
  //998px

  render() {
    const { item, isNext, isPrevious, isLeftEnd, isRightEnd } = this.state
    const dir = 1985

    const transfromHandle = {
      transform: `translateX(-${dir * isPrevious}px)`,
    } /*
    const listItem = {
      width: 16.6667,
    }*/
    return (
      <div className="SingleImageCarusel">
        <div className="SingleImageCarusel-container-warrpar">
          <div className="SingleImageCarusel-container" style={transfromHandle}>
            <ul className="SingleImageCarusel-list">
              {item.map((items) => (
                <li
                  className="SingleImageCarusel-list-item"
                  //  style={listItem}
                  key={items.id}
                >
                  <div className="SingleImageCarusel-list-item-container">
                    <a
                      href={`${items.url}`}
                      className="SingleImageCarusel-link"
                    >
                      <div className="SingleImageCarusel-item-container">
                        <div
                          className="SingleImageCarusel-item-image"
                          style={{
                            backgroundImage: `url(
                             ${items.img}
                            )`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></div>

                        <div className="OnSaleList-item-text">{items.name}</div>
                      </div>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          onClick={() => {
            this.Previous()
            console.log('sdasd')
          }}
          className={
            isLeftEnd
              ? 'fab-hide' + ' ' + 'HotkeyCarusel-fab-left'
              : 'HotkeyCarusel-fab-left'
          }
        >
          &lt;
        </div>
        <div
          onClick={() => this.next()}
          className={
            isRightEnd
              ? 'fab-hide' + ' ' + 'HotkeyCarusel-fab-right'
              : 'HotkeyCarusel-fab-right'
          }
        >
          &gt;
        </div>
      </div>
    )
  }
}
