<!--<template>-->
<!--    <div class="page-root">-->
<!--        <div class="data-view-div">-->
<!--            <span>反馈列表</span>-->
<!--        </div>-->
<!--        <div v-for='(item,index) in listResultArray' :key="index">-->
<!--            <div class="user-item">-->
<!--                <div>-->
<!--                    <span>反馈标题：{{item.title}}</span>-->
<!--                    <span>反馈内容：{{item.feedback_desc}}</span>-->
<!--                    <span>反馈人：{{item.user_name}}</span>-->
<!--                    <span>反馈时间：{{item.createAt}}</span>-->
<!--                </div>-->
<!--            </div>-->

<!--        </div>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--    import {onMounted, toRefs, reactive} from "vue";-->
<!--    import {getAllFeedbackList} from "../../api/request";-->

<!--    export default {-->
<!--        name: "FeedbackList",-->
<!--        methods: {},-->
<!--        setup() {-->

<!--            const state = reactive({-->
<!--                listResultArray: [],-->
<!--            });-->
<!--            onMounted(() => {-->

<!--                getAllList();-->
<!--            });-->

<!--            const getAllList = async () => {-->
<!--                let reusult = await getAllFeedbackList()-->

<!--                console.log(reusult.data, 11111);-->
<!--                state.listResultArray = reusult.data-->

<!--            };-->

<!--            return {-->
<!--                ...toRefs(state)-->
<!--            }-->

<!--        },-->
<!--    }-->
<!--</script>-->

<!--<style scoped lang="less">-->

<!--    .page-root {-->

<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        background: white;-->
<!--        padding: 10px 15%;-->

<!--        .user-item {-->
<!--            border-bottom: 1px solid #f7f7f7;-->
<!--            display: flex;-->
<!--            flex-direction: row;-->
<!--            justify-content: space-between;-->

<!--            div {-->
<!--                display: flex;-->
<!--                flex-direction: column;-->

<!--                span {-->
<!--                    text-align: left;-->
<!--                    color: #666666;-->
<!--                    margin-top: 5px;-->
<!--                    margin-left: 20px;-->
<!--                    margin-bottom: 10px;-->
<!--                    font-size: 0.9rem;-->
<!--                }-->
<!--            }-->
<!--        }-->

<!--        .data-view-div {-->
<!--            margin-top: 20px;-->
<!--            margin-bottom: 20px;-->

<!--            .btn-view {-->
<!--                margin-left: 20px;-->
<!--                border-radius: 10px;-->
<!--                background: #42b983;-->
<!--                color: white;-->
<!--                padding: 10px 20px;-->

<!--            }-->
<!--        }-->

<!--    }-->


<!--</style>-->