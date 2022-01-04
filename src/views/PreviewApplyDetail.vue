<template>
    <div class="preview-apply-datail-root">
        <span class="title-info">
            请确认您的报名信息
        </span>
        <div v-for="(item,index) in detailResult" :key="index" :class='item.mustFill=="1"?"red":"normal"'>
            <span class="info-key">{{item.key}}</span>


            <div v-if="item.type == '1'">
                <span>{{item.value}}</span>
            </div>
            <div v-else>
                <img :src="item.value">
            </div>
        </div>

        <span class="bottom-info">提交后资料无法修改，请核实您的信息无误后再提交</span>
        <span class="btn-sure">确认提交</span>

    </div>
</template>

<script>

    import {getMeetingEnrollInfo} from "../api/request";
    import {onMounted, toRefs, reactive} from "vue";

    export default {
        name: "PreviewApplyDetail",
        setup() {

            const state = reactive({
                detailResult: null,
                meetingId: '91',
            });
            onMounted(() => {
                getMeetingEnrollInfoResult();
            });

            const getMeetingEnrollInfoResult = async () => {
                let params = {
                    'siteId': '91',
                    'qbUserId': '0000864950'
                }
                let reusult = await getMeetingEnrollInfo(params)
                state.detailResult = reusult.data

            }

            return {
                ...toRefs(state)
            }

        },

    }
</script>

<style scoped lang="less">

    .preview-apply-datail-root {
        display: flex;
        flex-direction: column;
        background: white;


        .title-info {
            color: #666666;
            margin: 15px;
            text-align: start;
        }

        div {
            margin-top: 9px;
            display: flex;
            flex-direction: row;
            font-size: 0.8rem;


            .info-key {
                margin-top: auto;
                margin-bottom: auto;
                width: 30%;
                padding-left: 20px;
                text-align: right;
                margin-right: 10px;
            }

            div {
                display: flex;
                width: 60%;
                margin-top: auto;
                margin-bottom: auto;

                span {

                    text-align: left;
                    justify-content: start;
                }

                img {
                    width: 70px;
                }
            }


        }

        .red {
            color: red;
        }

        .normal {
            color: #333333;
        }

        .bottom-info {
            color: #999999;
            text-align: left;
            margin-left: 15px;
            margin-top: 20px;
            font-size: 0.9rem;
        }

        .btn-sure {
            color: white;
            background: #1f90ff;
            margin: 15px;
            padding: 10px 0px;
            border-radius: 10px;
        }

    }
</style>