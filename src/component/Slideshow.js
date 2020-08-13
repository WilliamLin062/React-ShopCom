import React from 'react'
import './css/SlideShow.css'
import data from '../test-data/slideData.json'
export default class Slideshow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: data,
      isPrevious: false,
      isNext: false,
    }
  }
  Previous() {
    const { isPrevious } = this.state
    this.setState(
      {
        isPrevious: true,
        isNext: false,
      },
      () => {
        console.log(isPrevious)
      }
    )
  }
  next() {
    const { isNext } = this.state
    this.setState(
      {
        isPrevious: false,
        isNext: true,
      },
      () => {
        console.log(isNext)
      }
    )
  }
  componentDidMount() {}
  render() {
    const { item, isNext, isPrevious } = this.state

    return (
      <div className="Slideshow-main">
        <div className="Slideshow">
          <div className="Slideshow-list-warrpar">
            <ul
              className={
                isNext
                  ? 'Slideshow-translateX-120' + ' ' + 'Slideshow-list'
                  : 'Slideshow-translateX0' + ' ' + 'Slideshow-list'
              }
            >
              {item.map((items) => (
                <li className="Slideshow-list-item" key={items.id}>
                  <div className="Slideshow-container">
                    <a
                      href="https://placeholder.com/150"
                      className="Slideshow-item-link"
                    >
                      <div className="Slideshow-item-container">
                        <div
                          className="Slideshow-item-image"
                          style={{
                            backgroundImage: ` url(${items.avatar})`,
                            backgroundSize: 'cover',
                          }}
                        ></div>
                        <div className="Slideshow-item-text">{items.name}</div>
                      </div>
                    </a>
                    <a
                      href="href= https://placeholder.com/150"
                      className="Slideshow-item-link"
                    >
                      <div className="Slideshow-item-container">
                        <div
                          className="Slideshow-item-image"
                          style={{
                            backgroundImage: ` url(${items.avatar})`,
                            backgroundSize: 'cover',
                          }}
                        ></div>{' '}
                        <div className="Slideshow-item-text">{items.name2}</div>
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
            isPrevious
              ? 'fab-hide' + ' ' + 'Slideshow-fab-left'
              : 'Slideshow-fab-left'
          }
        >
          &lt;
        </div>
        <div
          onClick={() => this.next()}
          className={
            isNext
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
