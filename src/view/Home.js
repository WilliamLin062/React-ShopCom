import React from 'react'
import SectionBanner from '../view-component/SectionBanner'
import './style/Home.css'
import Slideshow from '../component/Slideshow'
import LimitedTimeOnsale from '../view-component/LimitedTimeOnsale'
import Timer from '../component/Timer'
import GroupBuy from '../view-component/GroupBuy'
import ImageCarusel from '../component/ImageCarusel'
import SingleImageCarusel from '../component/SingleImageCarusel'
import HotkeyCarusel from '../component/HotkeyCarusel'
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}
  render() {
    return (
      <div className="main">
        <SectionBanner></SectionBanner>

        <div className="wellcome-package-banner"></div>

        <div className="home-category-list-container">
          <div className="home-category-list-name">分類</div>
          <div className="home-category-list">
            <Slideshow></Slideshow>
          </div>
        </div>
        <div
          className="shop-onsale-section  
        home-container"
        >
          <div className="shop-onsale-section-header">
            <div className="OnSale-bgc"></div>
            <div className="OnSale-timer">
              <Timer Seconds={1800}></Timer>
            </div>
          </div>
          <div className="shop-section-header-simple">
            <LimitedTimeOnsale></LimitedTimeOnsale>
          </div>
        </div>

        <div className="home-container">
          <div className="shop-section-header">團團購</div>
          <div className="shop-section-header-simple">
            <GroupBuy></GroupBuy>
          </div>
        </div>

        <div className="shop-skinny-banner-container">
          <a href="/" className="shop-skinny-banner-link">
            <div className="shop-skinny-banner-img"></div>
          </a>
          <a href="/" className="shop-skinny-banner-link">
            <div className="shop-skinny-banner-img"></div>
          </a>
        </div>
        <div className="home-shop-mall-section">
          <div className="home-shop-mall-section-header">
            <div className="home-header-title-text-container">
              <div className="home-header-title-text">蝦皮商城</div>
            </div>

            <div className="home-header-text-container">
              <div className="home-header-text">15天鑑賞期</div>
              <div className="home-header-text">退貨無負擔</div>
              <div className="home-header-text">假一賠二</div>
            </div>
            <div className="seeLink-container">
              <a href="/" className="seeLink">
                <div className="seeLink-text">查看全部</div>
              </a>
            </div>
          </div>
          <div className="home-shop-mall-down-item">
            <div className="home-shop-mall-stardust"></div>
            <div className="home-shop-mall-ImageCarusel">
              <ImageCarusel />
            </div>
          </div>
        </div>
        <div className="home-shop-hot-keyword">
          <div className="shop-onsale-section-header home-shop-hot-keyword-title">
            熱門關鍵字
            <button className="home-shop-hot-keyword-button">
              <svg className="shopee-svg-icon icon-refresh" viewBox="0 0 12 15">
                <path
                  d="M12 7.51268255c0-1.71021918-.7226562-3.30538371-1.9648437-4.43447938-.20507817-.18525749-.52148442-.16965686-.7070313.03315134-.18554687.20475828-.16992188.52067106.03320313.70592856C10.3984375 4.75722109 11 6.08717488 11 7.51268255c0 2.59360495-1.98242187 4.72699125-4.515625 4.96880095l.68164063-.7878318c.1796875-.2086585.15625-.5245713-.05273438-.7039785-.20898438-.1794073-.52539062-.1560063-.70507813.0526521l-1.49609375 1.7336201c-.18164062.2106086-.15625.5284714.05664063.7078787l1.65429688 1.3982065c.21093749.1774572.52539062.1521062.70507812-.0585023.17773438-.2106085.15234375-.5245712-.05859375-.7039785l-.75195313-.6357257C9.58789062 13.2205634 12 10.6484094 12 7.51268255zM2.80273438 11.3523879C1.66796875 10.4085497 1 9.0161934 1 7.51463263c0-2.75741154 2.23828125-4.99220194 5-4.99220194h.01367188l-.7734375.75078037c-.19726563.19305781-.203125.50897059-.00976563.70592855.19335938.19695797.50976563.20280821.70703125.0097504l1.64257813-1.59516453c.19921875-.19305781.20117187-.51287074.00585937-.70982871L6.06054688.14723461c-.1953125-.19500789-.51171875-.19695797-.70703125-.00195008C5.15820313.34029242 5.15625.6562052 5.3515625.85121309l.66992188.67472729H6c-3.31445312 0-6 2.68135846-6 5.99064232 0 1.8018729.80273438 3.4750406 2.16210938 4.6060863.21289062.1755071.52734375.148206.70507812-.0643526.17773438-.2164587.1484375-.5304214-.06445312-.7059285z"
                  fillRule="nonzero"
                ></path>
              </svg>{' '}
              更改
            </button>
          </div>
          <div className="home-shop-hot-keyword-down">
            <div className="hot-keyword">
              <div className="hot-keyword-text-container">
                <p className="hot-keyword-text-name">數字油畫</p>
                <p className="hot-keyword-text-small">4萬+件商品</p>
              </div>
              <div
                className="hot-keyword-img"
                style={{
                  backgroundImage: `url(https://cf.shopee.tw/file/2f44f6aee3b6ff1e618cadfb426a1b05)`,
                }}
              ></div>
            </div>
            <div className="hot-keyword">
              <div className="hot-keyword-text-container">
                <p className="hot-keyword-text-name">Adidas鞋子</p>
                <p className="hot-keyword-text-small">2萬+件商品</p>
              </div>
              <div
                className="hot-keyword-img"
                style={{
                  backgroundImage: `url(https://cf.shopee.tw/file/31e7552603ea1d5b54318008fd014cd5)`,
                }}
              ></div>
            </div>
            <div className="hot-keyword">
              <div className="hot-keyword-text-container">
                <p className="hot-keyword-text-name">角落生物玩偶</p>
                <p className="hot-keyword-text-small">3萬+件商品</p>
              </div>
              <div
                className="hot-keyword-img"
                style={{
                  backgroundImage: `url(https://cf.shopee.tw/file/3099bf9d8041d3af94c04e24556a0f1a)`,
                }}
              ></div>
            </div>
            <div className="hot-keyword">
              <div className="hot-keyword-text-container">
                <p className="hot-keyword-text-name">夾式耳環</p>
                <p className="hot-keyword-text-small">5萬+件商品</p>
              </div>
              <div
                className="hot-keyword-img"
                style={{
                  backgroundImage: `url(https://cf.shopee.tw/file/2f44f6aee3b6ff1e618cadfb426a1b05)`,
                }}
              ></div>
            </div>
            <div className="hot-keyword">
              <div className="hot-keyword-text-container">
                <p className="hot-keyword-text-name">Nike拖鞋</p>
                <p className="hot-keyword-text-small">3萬+件商品</p>
              </div>
              <div
                className="hot-keyword-img"
                style={{
                  backgroundImage: `url(https://cf.shopee.tw/file/3ff963cb9503db47e356373a6aee5b70)`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="home-shop-hot-product home-container">
          <div className="shop-onsale-section-header">熱門商品</div>
          <div className="home-shop-hot-product-down">
            <HotkeyCarusel></HotkeyCarusel>
          </div>
        </div>
      </div>
    )
  }
}
