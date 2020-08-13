import React from 'react'
import './style/ShopTop.css'
import ShopIcon from '../component/ShopIcon'
import BuyCar from '../component/BuyCar'
export default class ShopTop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className="shop-top">
        <div className="navbar_container">
          <div className="container navbar">
            <div className="flex v-center ">
              <a href="/" className="navber_link_text">
                賣家中心
              </a>
              <div className="navbar_link_separator"></div>
              <div className="download">
                <div>下載</div>
              </div>
              <div className="navbar_link_separator"></div>
              <div>追蹤我們</div>
              <div className="flex">
                <div className="icon_container">
                  <a className="pjy1mut-background" href="/">
                    <div className="fake fake_bgc1 pjy1mut-background"></div>
                  </a>
                </div>
                <div className="icon_container">
                  <a className="pjy1mut-background" href="/">
                    <div className="fake fake_bgc2 pjy1mut-background"></div>
                  </a>
                </div>
                <div className="icon_container">
                  <a className="pjy1mut-background" href="/">
                    <div
                      className="fake  
                    fake_bgc3 pjy1mut-background"
                    ></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar_spacer"></div>
            <ul className="navbar_links">
              <li>
                <div className="stardust-popover">
                  <div className="stardust-popover_target">
                    <a className="currentColor navbar_link_container" href="/">
                      <svg
                        className="shopee-svg-icon icon-notification-2"
                        viewBox="3 2.5 14 14"
                        x="0"
                        y="0"
                      >
                        <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z"></path>
                        <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z"></path>
                      </svg>
                      <span className="span_text">通知總攬</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="stardust-popover">
                  <div className="stardust-popover_target">
                    <a className="navbar_link_container" href="/">
                      <svg className="navber_helpbar">
                        <g
                          fill="none"
                          fillRule="evenodd"
                          transform="translate(1)"
                        >
                          <circle
                            cx="7"
                            cy="8"
                            r="7"
                            stroke="currentColor"
                          ></circle>
                          <path
                            fill="currentColor"
                            d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                          ></path>
                        </g>
                      </svg>
                      <span>幫助中心</span>
                    </a>
                  </div>
                </div>
              </li>
              <a href="/" className="navber_link_text">
                註冊
              </a>
              <div className="navbar_link_separator"></div>
              <a href="/" className="navber_link_text ">
                登入
              </a>
            </ul>
          </div>
        </div>
        <div className="container-wrapper">
          <div className="nav_down_container">
            <a className="shop_home_icon" href="/">
              <ShopIcon></ShopIcon>
            </a>
            <div className="header-with-search_warpper ">
              <div className="header-with-search ">
                <div className="shop-searchbar">
                  <form className="shopee-searchbar-input">
                    <input
                      aria-label="看更多免運店家"
                      placeholder="看更多免運店家"
                      className="shopee-searchbar-input__input"
                    ></input>
                  </form>
                </div>

                <button type="button" className="btn">
                  <svg
                    className="shopee-svg-icon "
                    height="19"
                    viewBox="0 0 19 19"
                    width="19"
                  >
                    <g fillRule="evenodd" stroke="none" strokeWidth="1">
                      <g transform="translate(-1016 -32)">
                        <g>
                          <g transform="translate(405 21)">
                            <g transform="translate(611 11)">
                              <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z"></path>
                              <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="navbar_sub">
                <div>
                  <a href="/">碎花洋裝</a>
                  <a href="/">手持風扇</a>
                  <a href="/">懶人沙發</a>
                  <a href="/">吊帶背心</a>
                  <a href="/">造型悠遊卡</a>
                  <a href="/">電動腳踏車</a>
                  <a href="/">浴室置物架</a>
                  <a href="/">室內拖鞋</a>
                </div>
              </div>
            </div>
            <div className="buy-car">
              <BuyCar></BuyCar>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
