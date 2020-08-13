import React from 'react'
import './style/LimitedTimeOnsale.css'
import Data from '../test-data/MOCK_DATA.json'
import TotalProgressBar from '../component/TotalProgressBar'
export default class OnSaleList extends React.Component {
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
    } else if (isPrevious === 0) {
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
  }
  next() {
    let { isNext, isPrevious, isRightEnd } = this.state
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
    } else if (isNext === 0) {
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
  }
  someData() {}
  //998px
  componentDidMount() {}
  render() {
    const { item, isNext, isPrevious, isLeftEnd, isRightEnd } = this.state
    const dir = 998

    const transfromHandle = { transform: `translateX(-${dir * isPrevious}px)` }
    return (
      <div className="OnSaleList-main">
        <div className="OnSaleList-container-warrpar">
          <div className="OnSaleList-container" style={transfromHandle}>
            <ul className="OnSaleList-list">
              {item.map((items) => (
                <li className="OnSaleList-list-item" key={items.id}>
                  <div className="OnSaleList-list-item-tag">
                    <div className="OnSaleList-list-item-tag-text">
                      {items.Onsale} 折
                    </div>
                  </div>
                  <div className="OnSaleList-list-item-container">
                    <a href={`${items.url}`} className="OnSaleList-link">
                      <div className="OnSaleList-item-container">
                        <div
                          className="OnSaleList-item-image"
                          style={{
                            backgroundImage: `url(
                             ${items.img}
                            )`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></div>
                        <div className="OnSaleList-item-text">
                          {`$`} {items.prise}
                        </div>
                        <div className="OnSaleList-item-bar">
                          <TotalProgressBar
                            width={100}
                            heigth={100}
                            totalText={Math.abs(items.total - items.sale)}
                            barWidths={(items.sale / items.total) * 100}
                          ></TotalProgressBar>
                        </div>
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
              ? 'fab-hide' + ' ' + 'Slideshow-fab-left'
              : 'Slideshow-fab-left'
          }
        >
          &lt;
        </div>
        <div
          onClick={() => this.next()}
          className={
            isRightEnd
              ? 'fab-hide' + ' ' + 'Slideshow-fab-right'
              : 'Slideshow-fab-right'
          }
        >
          &gt;
        </div>
      </div>
    )
  }
}
