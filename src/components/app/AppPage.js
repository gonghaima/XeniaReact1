import React, { Component } from 'react';
import Footer from '../common/Footer';
import ApiService from '../common/services/ApiService';
import Slider from "react-slick";
import '../../styles/carousel.css';

class AppPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 'Xinia'
    };
  }

  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="../images/app/2018-04-12_04-02-30-PM_iphone6_gold_portrait.png" />
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-02-36-PM_iphone6_gold_portrait.png" />
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-02-50-PM_iphone6_gold_portrait.png" />
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-03-45-PM_iphone6_gold_portrait.png" />
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-04-23-PM_iphone6_gold_portrait.png" />
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-04-49-PM_iphone6_gold_portrait.png" />
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-06-09-PM_iphone6_gold_portrait.png" />
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-06-24-PM_iphone6_gold_portrait.png" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default AppPage;
