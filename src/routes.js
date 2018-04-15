import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/Main';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import VisionPage from './components/vision/VisionPage';
import TestimonialPage from './components/testimonial/TestimonialPage';
import AppPage from './components/app/AppPage';
import TestPage from './components/test/TestPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="testimonial" component={TestimonialPage} />
    <Route path="vision" component={VisionPage} />
    <Route path="app" component={AppPage} />
    <Route path="test" component={TestPage} />
  </Route>
);
