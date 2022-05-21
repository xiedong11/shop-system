<template>
    <div>

        <div class="register-root">

            <span class="page-title">{{$t(`message.regisiter_top_info`)}}</span>
            <input class="register-input" :placeholder="$t(`message.input_userNumber`)" id='number'/>
            <input class="register-input" :placeholder="$t(`message.input_password`)" id="password"/>
            <input class="register-input" :placeholder="$t(`message.input_phone`)" id="phone"/>

            <span class="btn-register" @click="doRegister">{{$t(`message.btn_regisiter`)}}</span>
        </div>
    </div>
</template>

<script>
    import {regisiter} from "../api/request";
    import {Dialog} from 'vant';

    export default {
        name: "Register",
        methods: {
            doRegister: async function () {
                var number = document.getElementById('number').value
                var password = document.getElementById('password').value
                var phone = document.getElementById('phone').value

                let data = {
                    "userName": number,
                    'passWord': password,
                    'phone': phone
                }

                let result = await regisiter(data)

                if (result.msg == 'success') {
                    Dialog.confirm({
                        title: '注册成功'
                    }).then(() => {

                    }).catch(() => {
                        // on cancel
                    });
                } else {
                    Dialog.confirm({
                        title: '注册失败'
                    }).then(() => {
                        // window.location.href = "tel:" + this.detailResult.hotLine;
                    }).catch(() => {
                        // on cancel
                    });
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .register-root {
        /*background-image: url("../image/ic_arrow_down.png");*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        min-width: 500px;


        .page-title {
            font-size: 3rem;
            color: red;
            font-weight: bold;
            margin-bottom: 50px;
        }

        .register-input {
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
            width: 60%;
            border: 0px;
            padding-left: 10px;
            height: 45px;
            border-radius: 15px;
            font-size: 0.9rem;
        }

        .btn-register {
            background: black;
            width: 20%;
            padding: 10px 30px;
            margin-left: auto;
            border-radius: 20px;
            margin-right: auto;
            color: white;
            margin-top: 60px;
            font-size: 1.1rem;
        }
    }

</style>