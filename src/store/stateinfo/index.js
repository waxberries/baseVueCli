import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
	// 状态信息
	stateInfo: {
		name:'',		//姓名
	},
}

export default {
	state,
	getters,
	actions,
	mutations
}
