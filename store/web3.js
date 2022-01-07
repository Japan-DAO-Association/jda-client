// import $cookies from "cookie-universal-nuxt";
import Cookies from 'js-cookie';

export const state = () => ({
  account: '',
});

export const mutations = {
  updateAccount(state, account) {
    state.account = account;
    Cookies.set('account', state.account);
  },
};

export const getters = {
  getAccount(state) {
    if (state.account !== '') {
      return state.account;
    } else {
      return Cookies.get('account');
    }
  },
};

export const actions = {
  updateAccount(vuexContext, account) {
    vuexContext.commit('updateAccount', account);
  },
}