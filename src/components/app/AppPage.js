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
            <div className="descriptionContainer">
              <ul>
                <li>Key features: Even if your app has 20 different functions, focus on mentioning only the core features. You can highlight each of these features by showing how it will help your customers. Make use of bullet points here, as it is friendly to fast reading.</li>
                <li>Credibility: The description should also include a credibility statement. The best way to do this for a local business is by including a one-sentence customer review alluding to the app’s value. This third-party endorsement will help to build credibility when there are no reviews for your app yet.</li>
              </ul>
            </div>
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-02-36-PM_iphone6_gold_portrait.png" />
            <div className="descriptionContainer">
              <ul>
                <li>Key features: Even if your app has 20 different functions, focus on mentioning only the core features. You can highlight each of these features by showing how it will help your customers. Make use of bullet points here, as it is friendly to fast reading.</li>
                <li>Credibility: The description should also include a credibility statement. The best way to do this for a local business is by including a one-sentence customer review alluding to the app’s value. This third-party endorsement will help to build credibility when there are no reviews for your app yet.</li>
              </ul>
            </div>
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-02-50-PM_iphone6_gold_portrait.png" />
            <div className="descriptionContainer">
              <ul>
                <li>Key features: Even if your app has 20 different functions, focus on mentioning only the core features. You can highlight each of these features by showing how it will help your customers. Make use of bullet points here, as it is friendly to fast reading.</li>
                <li>Credibility: The description should also include a credibility statement. The best way to do this for a local business is by including a one-sentence customer review alluding to the app’s value. This third-party endorsement will help to build credibility when there are no reviews for your app yet.</li>
              </ul>
            </div>
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-03-45-PM_iphone6_gold_portrait.png" />
            <div className="descriptionContainer">
              <ul>
                <li>Key features: Even if your app has 20 different functions, focus on mentioning only the core features. You can highlight each of these features by showing how it will help your customers. Make use of bullet points here, as it is friendly to fast reading.</li>
                <li>Credibility: The description should also include a credibility statement. The best way to do this for a local business is by including a one-sentence customer review alluding to the app’s value. This third-party endorsement will help to build credibility when there are no reviews for your app yet.</li>
              </ul>
            </div>
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-04-23-PM_iphone6_gold_portrait.png" />
            <div className="descriptionContainer">
              <ul>
                <li>Key features: Even if your app has 20 different functions, focus on mentioning only the core features. You can highlight each of these features by showing how it will help your customers. Make use of bullet points here, as it is friendly to fast reading.</li>
                <li>Credibility: The description should also include a credibility statement. The best way to do this for a local business is by including a one-sentence customer review alluding to the app’s value. This third-party endorsement will help to build credibility when there are no reviews for your app yet.</li>
              </ul>
            </div>
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-04-49-PM_iphone6_gold_portrait.png" />
            <div className="descriptionContainer">
              <ul>
                <li>Key features: Even if your app has 20 different functions, focus on mentioning only the core features. You can highlight each of these features by showing how it will help your customers. Make use of bullet points here, as it is friendly to fast reading.</li>
                <li>Credibility: The description should also include a credibility statement. The best way to do this for a local business is by including a one-sentence customer review alluding to the app’s value. This third-party endorsement will help to build credibility when there are no reviews for your app yet.</li>
              </ul>
            </div>
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-06-09-PM_iphone6_gold_portrait.png" />
            <div className="descriptionContainer">
              <ul>
                <li>Key features: Even if your app has 20 different functions, focus on mentioning only the core features. You can highlight each of these features by showing how it will help your customers. Make use of bullet points here, as it is friendly to fast reading.</li>
                <li>Credibility: The description should also include a credibility statement. The best way to do this for a local business is by including a one-sentence customer review alluding to the app’s value. This third-party endorsement will help to build credibility when there are no reviews for your app yet.</li>
              </ul>
            </div>
          </div>
          <div>
            <img src="../images/app/2018-04-12_04-06-24-PM_iphone6_gold_portrait.png" />
            <div className="descriptionContainer">
              <ul>
                <li>Key features: Even if your app has 20 different functions, focus on mentioning only the core features. You can highlight each of these features by showing how it will help your customers. Make use of bullet points here, as it is friendly to fast reading.</li>
                <li>Credibility: The description should also include a credibility statement. The best way to do this for a local business is by including a one-sentence customer review alluding to the app’s value. This third-party endorsement will help to build credibility when there are no reviews for your app yet.</li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default AppPage;
