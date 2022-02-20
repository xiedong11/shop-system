<template>
    <div class="page-root">


        <div class="data-view-div">
            <span class="btn-view" @click="jumpDataCount">数据统计</span>
            <span class="btn-view" @click="addNewData">录入数据</span>
        </div>
        <div class="search-view">
            <input class='search-input' id='search-input' placeholder="请输入关键字..."/>
            <span @click="getProductByLocationResult">地区查询</span>
            <span @click="getProductByNumberResult">编号查询</span>
        </div>

        <div class="list-view">
            <div v-for='(item,index) in listResultArray' :key='index'>
                <div class="product-item" @click="jumpDetail(item.id)">
                    <span>编号：{{item.number}}</span>
                    <img :src="item!=null?item.picture:''"/>
                    <div class="item-desc">
                        <span>危险等级：{{item.level}}</span>
                        <span>{{item.name}}</span>
                        <span>{{item.productDesc}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import {onMounted, toRefs, reactive} from "vue";
    import {getAllList, getProductByLocation, getProductByNumber, queryMessage, delMessage} from "../api/request";
    import {Dialog} from "vant";

    export default {
        name: "ProductList",
        methods: {
            jumpDataCount: function () {
                this.$router.push({path: '/DataCount'})
            },
            addNewData: function () {
                this.$router.push({path: '/AddProduct'})
            },
            jumpDetail: function (id) {

                this.$router.push({
                    path: '/ProductDetail',
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

                queryMessageInfo();
            });

            const queryMessageInfo = async () => {
                let params = {
                    'userId': localStorage.getItem('userId')
                }
                let result = await queryMessage(params)
                if (result.msg == 'success' && result.data.length > 0) {
                    Dialog.confirm({
                        title: '预警信息',
                        message: "请及时检查管理员发来的预警信息"
                    }).then(() => {
                        let params = {
                            'userId': localStorage.getItem('userId')
                        }
                        delMessage(params).then((res) => {
                            if (res.data == 'success') {
                                Dialog.confirm({
                                    title: '删除成功'
                                })
                            }
                        })

                    }).catch(() => {
                        // on cancel
                    });
                }
            }

            const getAllProductList = async () => {
                let reusult = await getAllList()

                console.log(reusult.data, 11111);
                state.listResultArray = reusult.data

            };
            const getProductByLocationResult = async () => {
                let location = document.getElementById('search-input').value
                let params = {
                    'location': location
                }
                let result = await getProductByLocation(params)
                state.listResultArray = result.data
            };
            const getProductByNumberResult = async () => {
                let number = document.getElementById('search-input').value
                let params = {
                    'number': number
                }
                let result = await getProductByNumber(params)
                state.listResultArray = result.data
            }
            return {
                ...toRefs(state), getProductByLocationResult, getProductByNumberResult
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
                padding: 10px 20px;

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
    }
</style>