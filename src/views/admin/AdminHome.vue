<template>
    <div class="admin-home-page">


        <span class="admin-title">{{$t(`message.admin_user`)}}</span>
        <span>{{$t(`message.admin_info`)}}</span>

        <div class="menu-view">
            <span @click="jumpGoodsList">{{$t(`message.goods_list`)}}</span>
            <span @click="jumpUserList">{{$t(`message.manage_user`)}}</span>
            <span @click="jumpManageGoods">{{$t(`message.manage_goods`)}}</span>
            <span @click="jumpDataCount">{{$t(`message.goods_data`)}}</span>
            <span @click="switchLanguage">{{$t(`message.switch_language`)}}</span>
        </div>
        <span class="btn-logout" @click="logout">{{$t(`message.logout`)}}</span>
    </div>
</template>

<script>
    export default {
        name: "AdminHome",
        methods: {
            jumpDataCount: function () {
                this.$router.push({path: '/DataCount'})
            },
            addNewData: function () {
                this.$router.push({path: '/AddGoods'})
            },
            jumpGoodsList: function () {
                this.$router.push({path: '/GoodsList'})

            },
            switchLanguage:function(){
                var language = this.$i18n.locale
                if (language == "en") {
                    language = 'ch'
                } else {
                    language = 'en'
                }
                this.$i18n.locale = language;
            },
            jumpManageGoods: function () {
                this.$router.push({path: '/ManageGoods'})

            },
            jumpUserList: function () {
                this.$router.push({path: '/UserList'})

            },
            logout: function () {
                this.$router.push({path: '/'})

            },
        }
    }
</script>

<style scoped lang="less">

    .admin-home-page {
        background: white;
        display: flex;
        flex-direction: column;
        height: 100vh;

        .menu-view {
            margin-top: 50px;
            display: flex;
            flex-direction: column;

            span {
                background: #42b983;
                margin-top: 20px;
                width: 50%;
                height: 50px;
                padding: 20px 0px;
                border-radius: 20px;
                margin-right: auto;
                color: white;
                line-height: 50px;
                font-size: 1.5rem;
                margin-left: auto;
            }

            :nth-child(2) {
                background: #2facff;
            }

            :nth-child(3) {
                background: #f74082;
            }

            :nth-child(4) {
                background: #9c1668;
            }

            :nth-child(5) {
                background: #91a4b7;
            }
        }

        .admin-title {
            margin-bottom: 20px;
            margin-top: 10%;
            color: #333333;
            font-size: 3rem;
            font-weight: bold;
        }

        .btn-logout {
            margin-top: 10%;
            background: red;
            width: 200px;
            margin-left: auto;
            margin-right: auto;
            color: white;
            padding: 15px 50px;
            border-radius: 30px;
        }

    }
</style>