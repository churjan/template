<template>
	<div>
		<van-field label="文件上传">
			<template #input>
				<van-uploader v-model="fileList" multiple :max-count="5" :after-read="afterRead" />
			</template>
		</van-field>
	</div>
</template>

<script>
export default {
	props: {
		files: {
			defalut: () => [],
		},
	},
	computed: {
		fileList: {
			get() {
				return this.files
			},
			set(val) {
				this.$emit('update:files', val)
			},
		},
	},
	methods: {
		afterRead(files) {
			if (!Array.isArray(files)) {
				files = [files]
			}

			files.forEach(item => {
				item.status = 'uploading'
				item.message = '上传中...'

				const params = {
					file: item.file,
				}
				this.$apis.mock.imgUpload(params).then(({ status }) => {
					if (status === 200) {
						item.url = 'https://img.yzcdn.cn/vant/leaf.jpg'
						item.status = 'done'
						item.message = '上传成功'
					} else {
						item.status = 'failed'
						item.message = '上传失败'
					}
				})
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
