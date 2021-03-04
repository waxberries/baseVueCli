import * as types from './mutation-type'

const mutations = {
	//设置状态信息
	[types.SET_STATE_INFO] (state, data) {
		state.stateInfo = data
	},
}
export default mutations
