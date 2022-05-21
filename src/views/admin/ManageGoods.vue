<template>
    <div class="page-root">


        <div class="search-view">
            <span>{{$t(`message.manage_goods`)}}</span>
        </div>

        <div class="list-view">
            <div v-for='(item,index) in listResultArray' :key='index'>
                <div class="product-item">
                    <img :src="item!=null?item.picture:''" @click="jumpDetail(item.id)"/>
                    <div class="item-desc" @click="jumpDetail(item.id)">
                        <span>{{$t(`message.type`)}}：{{item.type}}</span>
                        <span>{{$t(`message.name`)}}：{{item.title}}</span>
                        <span>{{$t(`message.Auther`)}}：{{item.userName}}</span>
                    </div>
                    <span class="del-Goods" @click="onPassGoods(item)">{{$t(`message.pass`)}}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {onMounted, toRefs, reactive} from "vue";
    import { getAllList, updateGoodsInfo} from "../../api/request";
    import {Dialog} from "vant";


    export default {
        name: "ManageGoods",
        methods: {
            jumpDetail: function (id) {

                this.$router.push({
                    path: '/GoodsDetail',
                    query: {
                        "id": id
                    }
                })
            },
            onPassGoods: async function (item) {
               item.state=1
                let result = await updateGoodsInfo(item)

                if (result.data == 'success') {
                    Dialog.confirm({
                        title: '审核通过',
                        message: '已审核通过'
                    }).then(() => {
                        this.$router.go(0)
                    });

                }
            }
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
                    "state":0
                }
                let reusult = await getAllList(params)

                console.log(reusult.data, 11111);
                state.listResultArray = reusult.data

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

        .search-view {
            span {
                padding: 10px;
                border-radius: 10px;
                font-size: 1.5rem;
                margin-left: 10px;
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
            flex-direction: column;

            .product-item {
                padding-top: 10px;
                width: 80%;
                margin-top: 8px;
                margin-left: 8px;
                background: white;
                display: flex;
                flex-direction: row;
                box-shadow: 2px 2px 5px #f7f7f7;
                border-radius: 5px;

                img {
                    margin-top: 10px;
                    margin-left: 20px;
                    width: 120px;
                    height: 120px;
                    border-radius: 10px;
                }

                .item-desc {
                    margin-left: 30px;
                    margin-bottom: 20px;
                    margin-top: 20px;
                    display: flex;
                    flex-direction: column;

                    span {
                        text-align: start;
                        margin-top: 10px;
                        font-size: 0.8rem;
                        color: #666666;
                    }

                }

                .del-Goods {
                    margin-left: auto;
                    margin-right: 30px;
                    margin-top: auto;
                    margin-bottom: auto;
                    background: #f74082;
                    color: #f7f7f7;
                    padding: 10px 30px;
                    border-radius: 15px;
                }
            }
        }
    }
</style>