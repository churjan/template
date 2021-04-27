<template>
    <div>
        <div id="capture" style="padding: 10px; background: #f5da55">
            <h4 style="color: #000; ">{{ name }}</h4>
            <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3765569713,2752509541&fm=26&gp=0.jpg"
                alt=""
            />
        </div>
        <el-button type="primary" @click="onCapture">截图</el-button>
        <div id="content"></div>
    </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
    data() {
        return {
            name: 'Churjan',
        }
    },
    methods: {
        onCapture() {
            const options = {
                useCORS: true,
                allowTaint: true,
            }
            html2canvas(document.querySelector('#capture'), options).then(canvas => {
                // document.querySelector('#content').appendChild(canvas)
                var a = document.createElement('a')
                a.href = canvas.toDataURL('image/jpeg')
                a.download = 'somefile.jpg'
                a.click()
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
