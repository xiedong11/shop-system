<template>
    <div>

        <div class="login-root">



            <input class="login-input" :placeholder="$t(`message.input_userNumber`)" id='number'/>
            <input :placeholder="$t(`message.input_password`)" class="login-input"  id="password"/>

            <span class="go-register" @click="goRegisterPage">{{$t(`message.go_register`)}}</span>


            <van-radio-group v-model="radio" direction="horizontal" class="checkbox-view">
                <van-radio name="1" @click="setCheck(1)">{{$t(`message.normal_user`)}}</van-radio>
                <van-radio name="2" @click="setCheck(2)">{{$t(`message.admin_user`)}}</van-radio>
            </van-radio-group>
            <span class="btn-login" @click="goMainPage">{{$t(`message.btn_login`)}}</span>
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
                    this.$router.push({path: '/AdminHome'})
                    localStorage.setItem('userId','admin')
                    return
                }

                let data = {
                    "userName": number,
                    'passWord': password,
                }
                let reusult = await login(data)
                if (reusult.msg == '登录成功') {
                    this.$router.push({path: '/UserHome'})

                    localStorage.setItem('userId',reusult.data.id)
                    localStorage.setItem('userName',reusult.data.userName)
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
        /*background-image: url("../image/ic_arrow_down.png");*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        margin: 0px 0%;
        min-width: 500px;

        .page-title {
            font-size: 3rem;
            color: red;
            font-weight: bold;
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
            color: red;
        }

        .btn-login {
            background: black;
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