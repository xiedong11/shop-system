<template>
    <!--<van-button type="primary" @click="aaa">主要按钮</van-button>-->
    <!--&lt;!&ndash;<div> oooo</div>&ndash;&gt;-->
    <!--<SignUp></SignUp>-->
    <div @click="goMeetingDetailPage" style="background-color: yellow;height: 100px">
        <span>点击进详情</span>
    </div>
</template>

<script>


    // import {useRouter} from "vue-router";
    import {onMounted, reactive, toRefs} from "vue";
    // import SignUp from "./SignUp";
    import {getConferenceList} from "../../api/request";


    export default {
        name: "RegistrationInProgress",
        components: {
            // SignUp
        },

        methods: {
            goMeetingDetailPage: function () {
                this.$router.push({path: '/MeetingDetail'})
            }
        },

        setup() {
            // const router = useRouter();
            const state = reactive({
                // language: route.params.language ? route.params.language : 'chs',
                // keyword: route.params.keyword ? route.params.keyword : '',
                // hideSearch: false,
                loading: false,
                finished: false,
                qbUserId:"0000864909",
                // status:0,
                newsList: [],
                page: 1
            });
            onMounted(() => {
                getConferenceListFun();
            });
            const getConferenceListFun = ()=> {
                getConferenceList({qbUserId: state.language,page: state.page,size:10,status:0}).then(({ data })=>{
                    if(data.data.length>0){
                        data.data.forEach((item)=>{
                            state.newsList.push(item);
                        });
                        state.page++;
                    }else{
                        // 数据全部加载完成
                        state.finished = true;
                    }
                    // 加载状态结束
                    state.loading = false;

                }).catch((error)=>{
                    console.log(error);
                })
            };
            // const aaa = ()=> {
            //     // searchNewsListFun()
            //     // alert(99999)
            //     router.push({
            //         path:'/SingUp'
            //     })
            // };
            return {
                ...toRefs(state)
            }

        }

    }
</script>

<style scoped>

    .van-button {
        width: 90px;
        background-color: #189488;
    }

</style>