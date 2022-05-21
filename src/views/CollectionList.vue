<template>
    <div class="page-root">


        <span>{{$t(`message.my_collection`)}}</span>
        <div class="list-view">
            <div v-for='(item,index) in listResultArray' :key='index'>
                <div class="product-item" @click="jumpDetail(item.id)">

                    <img :src="item!=null?item.picture:''"/>
                    <div class="item-desc">
                        <span>{{$t(`message.type`)}}：{{item.type}}</span>
                        <span>{{$t(`message.goods_name`)}}：{{item.title}}</span>
                    </div>
                </div>
            </div>
        </div>


    </div>


</template>

<script>
    import {onMounted, toRefs, reactive} from "vue";
    import {getAllCollectionListByUserId, getGoodsByName, getGoodsByType} from "../api/request";

    export default {
        methods: {
            jumpDetail: function (id) {

                this.$router.push({
                    path: '/GoodsDetail',
                    query: {
                        "id": id
                    }
                })
            },
            jumpNewComment: function () {
                this.$router.push({path: '/NewComment'})

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
                let data = {
                    "userId": localStorage.getItem('userId')
                }
                let reusult = await getAllCollectionListByUserId(data)

                console.log(reusult.data, 11111);
                state.listResultArray = reusult.data

            };
            const getProductByTitle = async () => {
                let name = document.getElementById('search-input').value
                let params = {
                    'title': name
                }
                let result = await getGoodsByName(params)
                state.listResultArray = result.data
            };
            const getProductByType = async () => {
                let type = document.getElementById('search-input').value
                let params = {
                    'type': type
                }
                let result = await getGoodsByType(params)
                state.listResultArray = result.data
            }
            return {
                ...toRefs(state), getProductByTitle, getProductByType
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

        .search-view {
            .search-input {
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                width: 40%;
                background: #f7f7f7;
                border: 0px;
                padding-left: 10px;
                height: 40px;
                border-radius: 15px;
                font-size: 0.9rem;
            }

            span {
                padding: 10px;
                border-radius: 10px;
                font-size: 0.7rem;
                margin-left: 10px;
                color: white;
                background: #2facff;
            }
        }


        .data-view-div {
            margin-top: 20px;
            margin-bottom: 20px;

            .btn-view {
                margin-left: 20px;
                border-radius: 10px;
                background: #42b983;
                color: white;
                padding: 10px 40px;

            }
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

        .new-comment {
            background: #ea827d;
            color: white;
            font-size: 1.8rem;
            width: 80px;
            height: 80px;
            text-align: center;
            position: fixed;
            bottom: 50px;
            right: 100px;
            line-height: 80px;
            border-radius: 50px;
        }
    }
</style>