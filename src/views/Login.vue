<template>
    <div>

        <div class="login-root">

            <span class="page-title">危化品管理系统</span>
            <input class="login-input" placeholder="请输入账号" id='number'/>
            <input class="login-input" placeholder="请输入密码" id="password"/>

            <span class="go-register" @click="goRegisterPage">去注册？</span>


            <van-radio-group v-model="radio" direction="horizontal" class="checkbox-view">
                <van-radio name="1" @click="setCheck(1)">普通用户</van-radio>
                <van-radio name="2" @click="setCheck(2)">管理员</van-radio>
            </van-radio-group>
            <span class="btn-login" @click="goMainPage">登录</span>
        </div>
    </div>
</template>

<script>
    import {login} from "../api/request";
    import {Dialog} from "vant";
    var radio = '1';

    export default {
        name: "Login",
        data() {
            return {
                radio: radio,
            };
        },

        methods: {
            setCheck: function (index) {
                radio = index
            },
            goRegisterPage: function () {
                this.$router.push({path: '/Register'})
            },
            goMainPage: async function () {
                var number = document.getElementById('number').value
                var password = document.getElementById('password').value
                if (number == 'admin' && password == 'admin') {
                    if (radio != '2') {
                        console.log(radio, 111)

                        Dialog.alert({
                            title: '请选择管理员登录'
                        })
                        return
                    }
                    this.$router.push({path: '/UserList'})
                    return
                }

                let data = {
                    "userName": number,
                    'passWord': password,
                }
                let reusult = await login(data)
                if (reusult.msg == '登录成功') {
                    this.$router.push({path: '/ProductList'})
                } else {
                    Dialog.confirm({
                        title: '登录失败'
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
    .login-root {
        background: #f7f7f7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        margin: 0px 25%;
        min-width: 500px;

        .page-title {
            font-size: 2rem;
            margin-bottom: 50px;
        }

        .login-input {
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
            width: 60%;
            border-radius: 15px;
            border: 0px;
            padding-left: 10px;
            height: 45px;
            font-size: 0.9rem;
        }

        .go-register {
            margin-top: 20px;
            font-size: 1.1rem;
            margin-left: 60%;
        }

        .btn-login {
            background: #2facff;
            width: 20%;
            padding: 10px 30px;
            margin-left: auto;
            border-radius: 20px;
            margin-right: auto;
            color: white;
            font-size: 1.1rem;
        }

        .checkbox-view {
            justify-content: center;
            margin-bottom: 30px;
            margin-top: 30px;
            display: flex;
            flex-direction: row;


        }
    }

</style>