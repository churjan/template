<template>
    <div>
        <van-form>
            <van-field v-model="form.nickName" clearable label="你的姓名" placeholder="请输入" />
            <van-field
                :value="form.cardId"
                clearable
                label="身份证号"
                placeholder="请输入"
                readonly
                clickable
                @touchstart.native.stop="show = true"
            />
            <van-number-keyboard
                v-model="form.cardId"
                :show="show"
                extra-key="X"
                :maxlength="18"
                close-button-text="完成"
                @blur="show = false"
            />
            <van-field label="是否本人购车">
                <template #input>
                    <van-radio-group v-model="form.isPerson" direction="horizontal">
                        <van-radio name="1">是</van-radio>
                        <van-radio name="2">否</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <img-upload :files.sync="form.files" />
        </van-form>
        <div style="margin: 16px">
            <van-button round block type="info" @click="onSubmit">提交</van-button>
        </div>
    </div>
</template>

<script>
import ImgUpload from './components/img-upload.vue'
export default {
    data() {
        return {
            form: {
                nickName: '',
                cardId: '',
                isPerson: '',
                files: [],
            },
            show: false,
        }
    },
    components: {
        ImgUpload,
    },
    methods: {
        onSubmit() {
            console.log(this.form, 123)
        },
    },
}
</script>

<style lang="scss" scoped></style>
