<template>
	<div>
		<toolset />
		<div v-if="visible">
			<c-dialog :visible.sync="visible">
				hello
			</c-dialog>
		</div>
		<div @click="jump">123123</div>
		<h1>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt autem atque dicta in pariatur
			adipisci repudiandae fuga aliquam qui nam modi, beatae neque, facilis, laboriosam quod. Numquam, repellat
			ipsum!
		</h1>
		<h1>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt autem atque dicta in pariatur
			adipisci repudiandae fuga aliquam qui nam modi, beatae neque, facilis, laboriosam quod. Numquam, repellat
			ipsum!
		</h1>
		<h1>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt autem atque dicta in pariatur
			adipisci repudiandae fuga aliquam qui nam modi, beatae neque, facilis, laboriosam quod. Numquam, repellat
			ipsum!
		</h1>
		<h1>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt autem atque dicta in pariatur
			adipisci repudiandae fuga aliquam qui nam modi, beatae neque, facilis, laboriosam quod. Numquam, repellat
			ipsum!
		</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			visible: true,
		}
	},
	components: {
		Toolset: () => import('@/components/Toolset'),
		CDialog: () => import('@/components/CDialog'),
	},
	methods: {
		jump() {
			this.$router.push('/demo')
		},
	},
}
</script>
