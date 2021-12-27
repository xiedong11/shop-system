<template>
    <div class="meeting-detail-top-view">
        <img v-on:click="closePage" class="meeting-detail-icon" src="../image/ic_back.png">
        <img class="meeting-detail-icon" src="../image/ic_share.png">
    </div>
    <img class="meeting-detail-top-img" :src="detailResult!=null?detailResult.coverImgOne:''"/>

    <div class="meeting-info">

        <span class="meeting-name">{{detailResult!=null?detailResult.conferenceName:""}}</span>

        <div>
            <img src="../image/ic_time.png"/>
            <span>{{detailResult!=null?detailResult.addTime:""}}</span>
        </div>

        <div>
            <img src="../image/ic_location.png"/>
            <span>{{detailResult!=null?detailResult.city:""}}</span>
        </div>

        <div>
            <img src="../image/ic_phone.png"/>
            <span>{{detailResult!=null?detailResult.hotLine:""}}</span>
        </div>

        <img class="img-call" src="../image/ic_call.png">

        <span class="btn-sign-up" v-on:click="onClickSignUp">我要报名</span>
    </div>

    <div class="meeting-intro">

        <div>
            <div/>
            <span>会议简介</span>
        </div>

        <img class="meeting-intro-arrow" src="../image/ic_arrow_down.png">
    </div>

    <div class="meeting-detail-news-list-view">
        <div v-for='(item,index) in newsListArray' :key='index'>
            <div class="meeting-news-view">

                <div>
                    <span>{{item.title}}</span>
                    <span>{{item.source}}  {{item.pubtime.split(' ')[0]}}</span>

                </div>
                <img :src="item.img">
            </div>
        </div>

    </div>

    <div class="meeting-detail-bottom-view">
        <span class="btn-meeting-dynamic">会议动态</span>
        <span class="btn-meeting-question">报名问答</span>
    </div>

</template>

<script>
    import {getMeetingInfoDetail, getMeetingNewsList} from "../api/request";
    import {onMounted, toRefs, reactive} from "vue";
    import * as Base64 from "js-base64";

    export default {
        name: "ActivityDetail",
        methods: {
            closePage: function () {
                this.$router.back()
            },
            onClickSignUp: function () {

                let isLogin = window.qbJsBridge.isLogin()

                if (isLogin.toString() == "true") {
                    window.qbJsBridge.showToast('跳转报名页...')
                } else {
                    window.qbJsBridge.jumpLoginPage()
                }

            },

        },
        setup() {

            const state = reactive({
                detailResult: null,
                newsListArray: []
            });
            onMounted(() => {
                getMeetingInfoDetailResult();
                getMeetingNewsListReuslt();
            });

            const getMeetingInfoDetailResult = async () => {
                let params = {
                    'siteId': '91',
                    'uid': '864950'
                }
                let reusult = await getMeetingInfoDetail(params)
                state.detailResult = reusult.data

            }


            const getMeetingNewsListReuslt = async () => {

                let data = {
                    "action": "getMeetingDetail",
                    'meetingId': '92',
                    'page': 1,
                    'pageSize': 10
                }
                let base64Str = Base64.encode(JSON.stringify(data))

                let params = {
                    "data": base64Str
                }
                let reusult = await getMeetingNewsList(params)

                state.newsListArray = reusult.meeting.report
            }


            return {
                ...toRefs(state)
            }

        },


    }
</script>

<style scoped lang="less">


    .meeting-detail-top-view {
        position: fixed;
        display: flex;
        width: 100%;
        background: -webkit-linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        flex-direction: row;
        justify-content: space-between;

        .meeting-detail-icon {
            margin: 10px;
            width: 30px;
            height: 30px;
        }
    }

    .meeting-detail-top-img {
        margin-top: 0px;
        height: 230px;
        width: 100%;
    }


    .meeting-info {
        text-align: start;
        background: white;
        display: flex;
        color: #666666;
        font-size: 0.7rem;
        flex-direction: column;

        .meeting-name {
            margin: 15px;
            color: #000;
            font-weight: bold;
            font-size: 1rem;
        }

        div {
            margin: 5px 0px;

            img {
                margin-left: 15px;
                height: 12px;
            }

            span {
                margin-left: 8px;
            }
        }

        .img-call {
            margin-top: 60px;
            right: 20px;
            position: absolute;
            height: 30px;
            width: 30px;
        }

        .btn-sign-up {
            border-radius: 50px;
            color: white;
            padding: 8px 0px;
            text-align: center;
            font-size: 0.9rem;
            background: #1f90ff;;
            margin: 15px 15%;
        }


    }

    .meeting-intro {
        margin-top: 10px;
        background: white;
        display: flex;
        padding-top: 10px;
        flex-direction: column;
        margin-bottom: 20px;

        div {
            display: flex;
            flex-direction: row;

            :first-child {
                margin-left: 15px;
                margin-top: auto;
                margin-bottom: auto;
                width: 3px;
                height: 20px;
                margin-right: 5px;
                background: #2facff;
            }

            :nth-child(2) {
                color: black;
                font-weight: bold;
                font-size: 1.1rem;
            }
        }

        .meeting-intro-arrow {
            margin-top: 50px;
            height: 20px;
            width: 20px;
            margin-right: auto;
            margin-left: auto;
            padding-bottom: 10px;
        }
    }

    .meeting-detail-news-list-view {
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;

        .meeting-news-view {
            margin-top: 1px;
            padding: 10px 0px;
            background: white;
            display: flex;
            flex-direction: row;

            div {
                text-align: start;
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                margin-right: 10px;

                :first-child {
                    margin-top: 10px;
                    overflow: hidden;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                :nth-child(2) {
                    margin-top: 5px;
                    font-size: .8rem;
                    color: #666666;
                }
            }

            img {
                margin-right: 10px;
                height: 80px;
                margin-left: auto;
                width: 100px;
            }
        }
    }


    .meeting-detail-bottom-view {
        display: flex;
        position: fixed;
        bottom: 0px;
        font-size: .8rem;
        color: white;
        width: 100%;
        height: 50px;
        box-shadow: 5px 5px 5px 10px #F0F0F0;
        background: white;
        justify-content: flex-end;

        .btn-meeting-dynamic {
            margin-top: auto;
            margin-bottom: auto;
            padding: 5px 25px;
            height: 20px;
            line-height: 20px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            background: #2facff;

        }

        .btn-meeting-question {
            margin-top: auto;
            margin-bottom: auto;
            padding: 5px 25px;
            height: 20px;
            line-height: 20px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            background: #1f90ff;
            margin-right: 15px;
        }


    }


</style>