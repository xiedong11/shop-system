<template>

    <div class="page-root">
        <div>{{$t(`message.update_user_info`)}}</div>


        <input :placeholder="$t(`message.input_new_password`)" id="pwd"/>
        <span @click="updatePwd">{{$t(`message.btn_change_password`)}}</span>
        <input :placeholder="$t(`message.input_new_phone`)" id="phone"/>
        <span @click="updatePhone">{{$t(`message.btn_change_phone`)}}</span>
    </div>


</template>

<script>
    import {getUserById, updateUser} from "../api/request";
    import {Dialog} from "vant";

    export default {
        name: "UpdateUserInfo",
        methods: {
            updatePhone: async function () {
                let userId = localStorage.getItem('userId')

                let params = {
                    "id": userId
                }
                let result = await getUserById(params)
                let user = result.data

                if (user != null) {
                    let phone = document.getElementById('phone').value
                    user.phone = phone
                    let result = await updateUser(user)
                    if (result.msg == 'success') {
                        Dialog.confirm({
                            title: '手机号修改成功'
                        }).then(() => {
                            this.$router.push({path: '/'})
                        }).catch(() => {
                            // on cancel
                        });
                    }
                }
            },
            updatePwd: async function () {
                let userId = localStorage.getItem('userId')

                let params = {
                    "id": userId
                }
                let result = await getUserById(params)
                let user = result.data

                if (user != null) {
                    let passWord = document.getElementById('pwd').value
                    user.passWord = passWord
                    let result = await updateUser(user)
                    if (result.msg == 'success') {
                        Dialog.confirm({
                            title: '密码修改成功'
                        }).then(() => {
                            this.$router.push({path: '/'})
                        }).catch(() => {
                            // on cancel
                        });
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">

    .page-root {
        background: white;
        padding: 20%;
        padding-top: 10%;
        display: flex;
        flex-direction: column;


        div {
            font-size: 1.5rem;
            margin-bottom: 50px;
        }

        input {
            background: #f7f7f7;
            border: 0px;
            height: 40px;
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 0.8rem;
            padding-left: 10px;
            border-radius: 10px;
        }

        span {
            width: 120px;
            margin-right: auto;
            margin-left: auto;
            background: #2facff;
            margin-top: 30px;
            padding: 10px 30px;
            border-radius: 10px;
            color: white;
        }
    }
</style>