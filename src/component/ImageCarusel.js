import React from 'react'
import './css/ImageCarusel.css'
import Data from '../test-data/gropbuyData.json'
import TotalProgressBar from '../component/TotalProgressBar'
import GroupOnsaleTag from './GroupOnsaleTag'
export default class ImageCarusel extends React.Component {
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
    }
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
    }
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
  }
  someData() {}
  //998px

  render() {
    const { item, isNext, isPrevious, isLeftEnd, isRightEnd } = this.state
    const dir = 873

    const transfromHandle = {
      transform: `translateX(-${dir * isPrevious}px)`,
    } /*
    const listItem = {
      width: 16.6667,
    }*/
    return (
      <div className="ImageCarusel">
        <div className="ImageCarusel-container-warrpar">
          <div className="ImageCarusel-container" style={transfromHandle}>
            <ul className="ImageCarusel-list">
              {item.map((items) => (
                <li
                  className="ImageCarusel-list-item"
                  //  style={listItem}
                  key={items.id}
                >
                  <div className="ImageCarusel-list-item-container">
                    <a href={`${items.url}`} className="ImageCarusel-link">
                      <div className="ImageCarusel-item-container">
                        <div
                          className="ImageCarusel-item-image"
                          style={{
                            backgroundImage: `url(
                             ${items.img}
                            )`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></div>
                        <div
                          className="ImageCarusel-item-text
                        OnSale"
                        >
                          {`$`} {items.prise}
                        </div>
                        <div className="OnSaleList-item-text">
                          {`$`} {items.OnSalePrise}
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ImageCarusel-list-item-container">
                    <a href={`${items.url}`} className="ImageCarusel-link">
                      <div className="ImageCarusel-item-container">
                        <div
                          className="ImageCarusel-item-image"
                          style={{
                            backgroundImage: `url(
                             ${items.img}
                            )`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        ></div>
                        <div
                          className="ImageCarusel-item-text
                        OnSale"
                        >
                          {`$`} {items.prise}
                        </div>
                        <div className="ImageCarusel-item-text">
                          {`$`} {items.OnSalePrise}
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
