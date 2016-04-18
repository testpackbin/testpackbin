import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';

const model = Model({
  currentPage: 'home',
  snackbar: {
    show: false,
    text: '',
    persist: false
  },
  user: {
    isLoggedIn: false,
    isLoading: false,
    isAdmin: false,
    forceUser: false,
    user: {}
  },
  session: {
    sessionId: null,
    jwt: ''
  }
});

export default Controller(model);