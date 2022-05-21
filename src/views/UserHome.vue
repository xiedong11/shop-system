<template>
    <div class="page-root">


        <img class="top-img" src="../image/bg.jpg">

        <span class="title">{{$t(`message.something_you_like`)}}</span>

        <div class="list-view">
            <div v-for='(item,index) in listResultArray' :key='index'>
                <div class="product-item" @click="jumpDetail(item.id)">

                    <img :src="item!=null?item.picture:''"/>
                    <div class="item-desc">
                        <span>{{$t(`message.type`)}}：{{item.type}}</span>
                        <span>{{item.title}}</span>
                        <span>{{$t(`message.Auther`)}}：{{item.userName}}</span>
                    </div>
                </div>
            </div>
        </div>


        <div class="menu">
            <span @click="jumpGoodsList">{{$t(`message.goods_list`)}}</span>
            <span @click="jumpNewGoods">{{$t(`message.add_new_goods`)}}</span>
            <span @click="jumpCollectionList">{{$t(`message.my_collection`)}}</span>
            <span @click="jumpUpdateUserInfo">{{$t(`message.user_info`)}}</span>
            <span @click="switchLanguage">{{$t(`message.switch_language`)}}</span>
            <span @click="otherMode">{{$t(`message.other_mode`)}}</span>
            <span @click="jumpChatRoom">{{$t(`message.chat_room`)}}</span>
            <span @click="logout">{{$t(`message.logout`)}}</span>
        </div>


    </div>


</template>

<script>
    import {onMounted, toRefs, reactive} from "vue";
    import {getAllList} from "../api/request";

    export default {
        name: "GoodsList",
        methods: {
            jumpNewGoods: function () {

                this.$router.push({
                    path: '/AddGoods'
                })
            },
            jumpChatRoom:function(){
                this.$router.push({path: '/ChatRoom'})
            },
            jumpGoodsList: function () {
                this.$router.push({path: '/GoodsList'})
            },
            jumpUpdateUserInfo: function () {
                this.$router.push({path: '/UpdateUserInfo'})

            },
            otherMode: function () {
                var color = localStorage.getItem('color');
                if (color != 'black') {
                    document.getElementById("app").style = "filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(100%);"
                    localStorage.setItem('color', 'black')
                } else {
                    document.getElementById("app").style = ""
                    localStorage.setItem('color', '')

                }
            },
            switchLanguage: function () {
                var language = this.$i18n.locale
                if (language == "en") {
                    language = 'ch'
                } else {
                    language = 'en'
                }
                this.$i18n.locale = language;
            },
            jumpCollectionList: function () {
                this.$router.push({path: '/CollectionList'})

            },
            logout: function () {
                this.$router.push({path: '/'})

            },
            jumpDetail: function (id) {

                this.$router.push({
                    path: '/GoodsDetail',
                    query: {
                        "id": id
                    }
                })
            },

        },
        setup() {

            const state = reactive({
                listResultArray: [],
            });
            onMounted(() => {

                getAllProductList();


            });

            const getAllProductList = async () => {
                let params={
                    "state":1
                }
                let reusult = await getAllList(params)

                state.listResultArray = reusult.data.slice(0, 6)

            };

            return {
                ...toRefs(state)
            }

        },
    }
</script>

<style scoped lang="less">

    .page-root {
        display: flex;
        flex-direction: column;
        background: white;
        padding: 10px 15%;


        .top-title {
            text-align: center;
            margin: 20px;
            font-size: 2.5rem;
            font-weight: bold;
            color: #629bf8;
        }

        .top-img {
            height: 200px;
        }

        .title {
            text-align: start;
            margin: 20px;
            font-size: 1.2rem;
            font-weight: bold;
            color: black;
        }

        .list-view {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .product-item {
                padding-top: 10px;
                width: 260px;
                margin-top: 8px;
                margin-left: 8px;
                background: white;
                display: flex;
                flex-direction: column;
                box-shadow: 2px 2px 5px #f7f7f7;
                border-radius: 5px;

                img {
                    margin-top: 10px;
                    margin-left: auto;
                    margin-right: auto;
                    width: 180px;
                    height: 180px;
                    border-radius: 10px;
                }

                .item-desc {
                    margin-bottom: 20px;
                    margin-top: 20px;
                    display: flex;
                    flex-direction: column;

                    span {
                        margin-top: 10px;
                        font-size: 0.8rem;
                        color: #666666;
                    }

                }
            }
        }

        .menu {
            color: white;
            display: flex;
            flex-direction: column;
            font-size: 1.0rem;
            text-align: center;
            position: fixed;
            top: 30px;
            right: 30px;

            span {
                padding: 10px 25px;
                background: #2facff;
                margin-top: 2px;
                border-radius: 5px;
            }
        }
    }
</style>