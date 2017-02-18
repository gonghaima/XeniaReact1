import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/Main';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import VisionPage from './components/vision/VisionPage';
import TestimonialPage from './components/testimonial/TestimonialPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="testimonial" component={TestimonialPage} />
    <Route path="vision" component={VisionPage} />
  </Route>
);
