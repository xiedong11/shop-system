<template>

    <van-nav-bar

            title="活动"
            left-arrow
            @click-left="onClickLeft"

    />
    <!--@nav-bar-background-color="#1A93EA"-->

    <van-tabs v-model="active" title-active-color="#1A93EA" color="#1A93EA" swipe-threshold="1" line-width="94px" swipeable>
        <van-tab title="报名进行中">
            <div style="background-color: #F0F0F0;height: 11px"></div>
            内容 1

            <RegistrationInProgress>

            </RegistrationInProgress>
        </van-tab>
        <van-tab title="报名已截止">
            <div style="background-color: #F0F0F0;height: 11px"></div>

            内容 2
            <RegistrationIsClosed>

            </RegistrationIsClosed>

        </van-tab>
        <van-tab title="报名待开始">
            <div style="background-color: #F0F0F0;height: 11px"></div>
            内容 3
            <RegistrationToStart>

            </RegistrationToStart>
        </van-tab>
        <van-tab title="活动进行中">
            <div style="background-color: #F0F0F0;height: 11px"></div>
            内容 4
            <ActivityInProgress>

            </ActivityInProgress>
        </van-tab>
        <van-tab title="活动已结束">
            <div style="background-color: #F0F0F0;height: 11px"></div>
            内容 5
            <ActivityEnded>

            </ActivityEnded>
        </van-tab>
    </van-tabs>



    
</template>

<script>

    import {onMounted, reactive, toRefs} from "vue";
    import RegistrationInProgress from "../components/RegistrationInProgress";
    import ActivityEnded from "../components/ActivityEnded";
    import ActivityInProgress from "../components/ActivityInProgress";
    import RegistrationIsClosed from "../components/RegistrationIsClosed";
    import RegistrationToStart from "../components/RegistrationToStart";

    export default {
        name: "activity.vue",

        components:{
            RegistrationInProgress,ActivityEnded,ActivityInProgress,RegistrationIsClosed,RegistrationToStart
        },

        setup() {
            // const router = useRouter();
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

            const onClickLeft = ()=> {
                // searchNewsListFun()
                alert(99999)
                // router.push({
                //     path:'/SingUp'
                // })
            };
            return {
                ...toRefs(state),onClickLeft
            }

        }
    }
</script>

<style scoped>

</style>