import React from 'react'
import './style/SectionBanner.css'
import Slideshow from '../component/Slideshow'
import AutoCarusel from '../component/AutoCarusel'
export default class SectionBanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}
  render() {
    return (
      <div className="SectionBanner">
        <div className="sectioBnanner-container">
          <div className="sectioBnanner-slideshowContainer">
            <AutoCarusel></AutoCarusel>
          </div>
          <div className="sectioBnanner-slideshow-subBanneContainer">
            <div className="sectioBnanner-slideshow-subBanner sectioBnanner-slideshow-subBanner-bg1"></div>
            <div className="sectioBnanner-slideshow-subBanner sectioBnanner-slideshow-subBanner-bg2"></div>
          </div>
        </div>
        <div className="sectioBnanner-bottomlinkContainer">
          <div className="sectioBnanner-bottomlink">
            <a href="/">
              <div className="sectioBnanner-bottomlink-imgContainer  ">
                <div className="sectioBnanner-bottomlink-img"></div>
                <span>蝦皮24h</span>
              </div>
            </a>
            <a href="/">
              <div className="sectioBnanner-bottomlink-imgContainer  ">
                <div className="sectioBnanner-bottomlink-img"></div>
                <span>蝦皮超市</span>
              </div>
            </a>
            <a href="/">
              <div className="sectioBnanner-bottomlink-imgContainer  ">
                {' '}
                <div className="sectioBnanner-bottomlink-img"></div>
                <span>現領購物金</span>
              </div>
            </a>

            <a href="/">
              <div className="sectioBnanner-bottomlink-imgContainer  ">
                {' '}
                <div className="sectioBnanner-bottomlink-img"></div>
                <span>蝦皮電子</span>
              </div>
            </a>
            <a href="/">
              <div className="sectioBnanner-bottomlink-imgContainer  ">
                <div className="sectioBnanner-bottomlink-img"></div>
                <span>蝦時尚</span>
              </div>
            </a>
            <a href="/">
              <div className="sectioBnanner-bottomlink-imgContainer  ">
                <div className="sectioBnanner-bottomlink-img"></div>
                <span>男人館$1奪寶戰</span>
              </div>
            </a>
            <a href="/">
              <div className="sectioBnanner-bottomlink-imgContainer  ">
                <div className="sectioBnanner-bottomlink-img"></div>
                <span>蝦皮團購</span>
              </div>
            </a>
            <a href="/">
              <div className="sectioBnanner-bottomlink-imgContainer  ">
                <div className="sectioBnanner-bottomlink-img"></div>
                <span>海外直送</span>
              </div>
            </a>
            <a href="/">
              <div className="sectioBnanner-bottomlink-imgContainer  ">
                <div className="sectioBnanner-bottomlink-img"></div>
                <span>蝦皮超便宜</span>
              </div>
            </a>
            <a href="/">
              <div className="sectioBnanner-bottomlink-imgContainer  ">
                <div className="sectioBnanner-bottomlink-img"></div>

                <span>刷卡活動</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
