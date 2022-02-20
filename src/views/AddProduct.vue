<template>
    <div class="page-root">

        
        <div>
            <van-uploader :after-read="afterRead" >
                <img class="product-img" :src="imgSrc">
            </van-uploader>
        </div>


        <input placeholder="请输入物品名称..." class="page-input" id = 'name'/>
        <input placeholder="请输入物品描述..." class="page-input" id = 'desc'/>
        <input placeholder="请输入物品分类..." class="page-input" id = 'type'/>
        <input placeholder="请输入物品数量..." class="page-input" id = 'count'/>
        <input placeholder="请输入物品安全期限..." class="page-input" id = 'deadline'/>
        <input placeholder="请输入物品存储地点..." class="page-input" id = 'location'/>
        <input placeholder="请输入物品风险等级..." class="page-input" id = 'level'/>
        <input placeholder="请输入物品编号..." class="page-input" id = 'number'/>


        <span class="btn-submit" @click="addProduct">提交</span>

    </div>
</template>

<script>
    import {addNewProduct} from "../api/request";
    import {Dialog} from 'vant';

    export default {
        name: "AddProduct",
        data() {
            return {
                imgSrc:''
        };
        },
        methods:{
            afterRead(file) {
                // console.log(file.content,111);
                this.imgSrc = file.content
            },
            addProduct: async function () {
                let picture = this.imgSrc
                let name = document.getElementById('name').value
                let desc = document.getElementById('desc').value
                let type = document.getElementById('type').value
                let count = document.getElementById('count').value
                let deadline = document.getElementById('deadline').value
                let location = document.getElementById('location').value
                let level = document.getElementById('level').value
                let number = document.getElementById('number').value
                let userId = localStorage.getItem('userId')

                let data = {
                    "picture":picture,
                    "name": name,
                    "productDesc": desc,
                    "type": type,
                    "count": count,
                    "deadline": deadline,
                    "location": location,
                    "level": level,
                    "number": number,
                    "userId":userId
                }

                let result = await addNewProduct(data)

                console.log(result,111)

                if(result.msg=='success'){
                    Dialog.confirm({
                        title:'添加成功'
                    }).then(() => {

                    }).catch(() => {
                        // on cancel
                    });
                }else {
                    Dialog.confirm({
                        title:'添加' +
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

    .page-root{
        padding: 0px 20%;
        background: white;
        display: flex;
        flex-direction: column;

        .product-img{
            width: 150px;
            height: 150px;
            margin: auto;
            margin-top: 30px;
        }
        .page-input{
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
        .btn-submit{
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