<template>
    <van-button type="primary" @click="aaa">主要按钮</van-button>
    <!--<div> oooo</div>-->
    <SignUp></SignUp>
    <div></div>
</template>

<script>


    import {useRouter} from "vue-router";
    import {onMounted, reactive, toRefs} from "vue";
    import SignUp from "./SignUp";


    export default {
        name: "RegistrationInProgress",
        components: {
            SignUp
        },


        setup() {
            const router = useRouter();
            const state = reactive({
                // language: route.params.language ? route.params.language : 'chs',
                // keyword: route.params.keyword ? route.params.keyword : '',
                // hideSearch: false,
                // loading: false,
                // finished: false,
                // newsList: [],
                // pageIndex: 1
            });
            onMounted(() => {

            });
            // const searchNewsListFun = ()=> {
            //     getSearchNewsList({language: state.language,pageIndex: state.pageIndex,searchWord:state.keyword}).then(({ data })=>{
            //         if(data.data.length>0){
            //             data.data.forEach((item)=>{
            //                 state.newsList.push(item);
            //             });
            //             state.pageIndex++;
            //         }else{
            //             // 数据全部加载完成
            //             state.finished = true;
            //         }
            //         // 加载状态结束
            //         state.loading = false;
            //
            //     }).catch((error)=>{
            //         console.log(error);
            //     })
            // };
            const aaa = ()=> {
                // searchNewsListFun()
                // alert(99999)
                router.push({
                    path:'/SingUp'
                })
            };
            return {
                ...toRefs(state),aaa
            }

        }

    }
</script>

<style scoped>

    .van-button{
        width: 90px;
        background-color: #189488;
    }

</style>