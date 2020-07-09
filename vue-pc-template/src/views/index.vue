<template>
	<div>
		<toolset />
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
	components: {
		Toolset: () => import('@/components/Toolset'),
	},
	methods: {
		jump() {
			this.$router.push('/demo')
		},
	},
}
</script>
