import React from 'react';
import ReactDOM from 'react-dom';
import controller from './controller.js';
import {Container} from 'cerebral-view-react';
import Router from 'cerebral-module-router';
import Http from 'cerebral-module-http';
import Recorder from 'cerebral-module-recorder';
import Devtools from 'cerebral-module-devtools';

import App from 'components/App/index';

import Home from './modules/home';
import Courses from './modules/courses';
import Admin from './modules/admin';


import showSnackbar from 'common/factories/actions/showSnackbar';
import hideSnackbar from 'common/factories/actions/hideSnackbar';

controller.addSignals({
  snackbarTimedOut: [
    hideSnackbar
  ],
  missingRouteRouted: [
    showSnackbar('This route does not exist')
  ]
});

controller.addServices({
  getIframePosition() {
    const previewIframe = document.getElementById('previewIframe');

    return {
      offsetLeft: previewIframe.offsetParent.offsetLeft + previewIframe.offsetLeft,
      offsetTop: previewIframe.offsetParent.offsetTop + previewIframe.offsetTop
    };
  }
});

controller.addModules({
  home: Home(),
  courses: Courses(),
  admin: Admin(),

  http: Http(),
  recorder: Recorder({
    state: {
      isEnded: false,
      isUploading: false,
      hasUpload: false,
      hasRecorded: false,
      isBuffering: false,
      currentSeek: [0, Date.now()],
      lastPaused: Date.now()
    }
  }),
  devtools: process.env.NODE_ENV === 'production' ? () => {} : Devtools(),
  router: Router({
    '/': 'home.opened',
    '/courses': 'courses.opened',
    '/admin': 'admin.opened',
    '/binedit':'admin.binEditOpened',  
    '*': 'missingRouteRouted'
  }, {
    onlyHash: false,
    mapper: {query: true}
  })
});


ReactDOM.render(
  <Container controller={controller}>
    <App/>
  </Container>,
document.getElementById('root'));
