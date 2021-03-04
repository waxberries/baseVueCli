import Vue from "vue";
import Vuex from "vuex";
import state from './stateinfo' //注册全局状态
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		state,
	}
});
