<!--报名资料页-->


<template>
    <div class="apply-data-root">
        <div v-for='(item ,index) in listResultArray' :key='index'>
            <div class="apply-data-list-item">
                <span>{{item.name}}</span>
                <img src="../image/ic_right_arrow.png"/>
            </div>
        </div>

    </div>
</template>

<script>

    import {onMounted, toRefs, reactive} from "vue";
    import {getApplyData} from "../api/request";


    export default {
        name: "ApplyData",


        setup() {

            const state = reactive({
                listResultArray: [],
                meetingId: '91',
            });
            onMounted(() => {

                getApplyDataResult();
            });

            const getApplyDataResult = async () => {
                let params = {
                    'siteId': '91',
                    'qbUserId': '0000864950'
                }
                let reusult = await getApplyData(params)

                console.log(reusult.data.msgs);
                state.listResultArray = reusult.data.msgs

            }
            return {
                ...toRefs(state)
            }

        },
    }


</script>

<style scoped lang="less">
    .apply-data-root {
        padding-top: 50px;
        background: #F0F0F0;
        height: 100vh;

        .apply-data-list-item {
            display: flex;
            margin-top: 1px;
            flex-direction: row;
            justify-content: space-between;
            background: white;
            height: 40px;

            span {
                line-height: 40px;
                margin-left: 15px;
                font-size: 1.0rem;
            }

            img {
                height: 20px;
                margin-top: auto;
                margin-bottom: auto;
                margin-right: 10px;
            }
        }
    }


</style>