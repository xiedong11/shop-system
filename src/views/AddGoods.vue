<template>
    <div class="page-root">


        <div>
            <van-uploader :after-read="afterRead">
                <img class="product-img" :src="imgSrc">
            </van-uploader>
        </div>


        <input :placeholder="$t(`message.input_goods_name`)" class="page-input" id='name'/>
        <input :placeholder="$t(`message.input_goods_desc`)" class="page-input" id='desc'/>
        <input :placeholder="$t(`message.input_goods_type`)" class="page-input" id='type'/>

        <span class="btn-submit" @click="addProduct">{{$t(`message.btn_release_goods`)}}</span>

    </div>
</template>

<script>
    import {addNewProduct} from "../api/request";
    import {Dialog} from 'vant';

    export default {
        name: "AddProduct",
        data() {
            return {
                imgSrc: ''
            };
        },
        methods: {
            afterRead(file) {
                // console.log(file.content,111);
                this.imgSrc = file.content
            },
            addProduct: async function () {
                let picture = this.imgSrc
                let title = document.getElementById('name').value
                let Goods_desc = document.getElementById('desc').value
                let type = document.getElementById('type').value
                let userName = localStorage.getItem('userName')
                let userId = localStorage.getItem('userId')
                // let userId = localStorage.getItem('userId')

                let data = {
                    "picture": picture,
                    "title": title,
                    "content": Goods_desc,
                    "type": type,
                    "userName": userName,
                    "userId": userId,
                    "state": 0
                }

                let result = await addNewProduct(data)

                console.log(result, 111)

                if (result.msg == 'success') {
                    Dialog.confirm({
                        title: '添加成功'
                    }).then(() => {

                    }).catch(() => {
                        // on cancel
                    });
                } else {
                    Dialog.confirm({
                        title: '添加' +
                            '失败'
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

    .page-root {
        padding: 0px 20%;
        background: white;
        display: flex;
        flex-direction: column;

        .product-img {
            width: 150px;
            height: 150px;
            margin: auto;
            margin-top: 30px;
        }

        .page-input {
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
            width: 60%;
            border-radius: 15px;
            border: 0px;
            padding-left: 10px;
            height: 40px;
            border-bottom: solid #e3e3e3 1px;
            font-size: 0.9rem;
        }

        .btn-submit {
            background: #2facff;
            width: 35%;
            padding: 10px 0px;
            color: white;
            margin: auto;
            margin-top: 30px;
            border-radius: 15px;
        }

    }
</style>