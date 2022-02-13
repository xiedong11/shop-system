<template>
    <div class="page-root">

        <img :src="listResult!=null?listResult.picture:''"/>
        <span>编号：{{listResult.number}}</span>
        <span>名称：{{listResult.name}}</span>
        <span>描述：{{listResult.productDesc}}</span>
        <span>类别：{{listResult.productDesc}}</span>
        <span>数量：{{listResult.count}}</span>
        <span>安全期限：{{listResult.deadline}}</span>
        <span>存放地点：{{listResult.location}}</span>
        <span>危险等级：{{listResult.level}}</span>
        <span>创建时间：{{listResult.createAt}}</span>

    </div>
    
</template>

<script>
    import {onMounted, reactive, toRefs} from "vue";
    import {getProductById} from "../api/request";
    import { useRouter } from 'vue-router'
    import {Dialog} from "vant";
    export default {
        name: "ProductDetail",

        setup() {
            const router = useRouter()

            const state = reactive({
                listResult:{},
                id:router.currentRoute.value.query.id
            });


            onMounted(() => {
                getProduct();
            });

            const getProduct = async () => {
                let params = {
                    'id':state.id
                }
                let reusult = await getProductById(params)
                console.log(reusult.data,11111);
                state.listResult = reusult.data[0]
                if (state.listResult.level==4){
                    Dialog.alert({
                        title:'风险等级较高',
                        message:'当前风险等级为4'
                    });
                }else if (state.listResult.level==5){
                    Dialog.alert({
                        title:'风险等级较高',
                        message:'当前风险等级为5'
                    });
                }else if (state.listResult.level==6){
                    Dialog.alert({
                        title:'风险等级较高',
                        message:'当前风险等级为6'
                    });
                }else if (state.listResult.level==7){
                    Dialog.alert({
                        title:'风险等级较高',
                        message:'当前风险等级为7'
                    });
                }

            }
            return {
                ...toRefs(state)
            }

        },
    }
</script>

<style scoped lang="less">

    .page-root{
        display: flex;
        flex-direction: column;
        background: white;

        img{
            margin: 10px 20%;
            margin-bottom: 30px;
        }
        span{
            text-align: left;
            margin-left: 20%;
            margin-top: 10px;
            font-size: 0.9em;
            color: #333333;
        }
    }
</style>