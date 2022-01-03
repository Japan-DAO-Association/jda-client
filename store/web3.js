// import $cookies from "cookie-universal-nuxt";
import Cookies from 'js-cookie';

export const state = () => ({
  web3: {
    account: '',
  },
});

export const mutations = {
  updateWeb3(state, web3) {
    state.web3 = web3;
    Cookies.set('web3', state.web3);
  },
  updateAccount(state, account) {
    state.web3.account = account;
    Cookies.set('web3', state.web3);
  },
};

export const getters = {
  getWeb3(state) {
    if (state.web3.account !== '') {
      return state.web3;
    } else {
      return Cookies.get('web3');
    }
  },
};

export const actions = {
  updateWeb3(vuexContext, web3) {
    vuexContext.commit('updateWeb3', web3);
  },
  udpateAcount(vuexContext, account) {
    vuexContext.commit('updateAccount', account);
  },
}