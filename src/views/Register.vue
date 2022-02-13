<template>
    <div>

        <div class="register-root">

            <span class="page-title">危化品管理系统</span>
            <input class="register-input" placeholder="请输入账号"  id='number' />
            <input class="register-input" placeholder="请输入密码 " id="password"/>
            <input class="register-input" placeholder="请输入手机号" id="phone"/>

            <span class="btn-register" @click="doRegister">注册</span>
        </div>
    </div>
</template>

<script>
    import {regisiter} from "../api/request";
    import {Dialog} from 'vant';
    export default {
        name: "Register",
        methods:{
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

                if(result.msg=='success'){
                    Dialog.confirm({
                        title:'注册成功'
                    }).then(() => {

                        }).catch(() => {
                            // on cancel
                        });
                }else {
                    Dialog.confirm({
                        title:'注册失败'
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
    .register-root{
        background: #f7f7f7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        margin: 0px 25%;
        min-width: 500px;


        .page-title{
            font-size: 2rem;
            margin-bottom: 50px;
        }
        .register-input{
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

        .go-register{
            margin-top: 20px;
            font-size: 1.1rem;
            margin-left: 60%;
        }

        .btn-register{
            background: #2facff;
            width: 20%;
            padding: 10px 30px;
            margin-left: auto;
            border-radius: 20px;
            margin-right: auto;
            color: white;
            margin-top: 30px;
            font-size: 1.1rem;
        }
    }

</style>