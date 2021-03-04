<template>
	<div class="about">
		<h1>This is an about page</h1>
		<h2>{{addressUrl}}</h2>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				addressUrl: ''
			}
		},
		created() {
			// 获取app最新版本
			this.getAppVersion()
		},
		methods: {
			// 获取app最新版本
			getAppVersion() {
				let url = this.$api.getH5QrcodeUrl
				this.$axios.post(url).then((res) => {
					if (res && res.data.data) {
						if (res.data.data.configValue) {
							this.addressUrl = res.data.data.configValue
						}
					}
				}).catch((error) => {
					console.log(error)
				});
			},
		},
	}
</script>

<style scoped>

</style>
