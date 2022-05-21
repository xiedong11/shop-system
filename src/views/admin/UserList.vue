<template>
    <div class="page-root">
        <div class="data-view-div">
            <span>{{$t(`message.user_list`)}}</span>
        </div>
        <div v-for='(item,index) in listResultArray' :key="index">
            <div class="user-item">
                <div @click="jumpSingleDataCount(item.id)">
                    <span>{{$t(`message.Auther`)}}：{{item.userName}}</span>
                    <span>{{$t(`message.time`)}}：{{item.createdAt}}</span>
                </div>
                <span class="del-user" @click="deleteUser(item.id)">{{$t(`message.btn_del`)}}</span>
            </div>

        </div>
    </div>
</template>

<script>
    import {onMounted, toRefs, reactive} from "vue";
    import {getAllUser, deleteUser} from "../../api/request";
    import {Dialog} from "vant";

    export default {
        name: "UserList",
        methods: {

            deleteUser: async function (id) {

                let params = {
                    'id': id
                }
                let result = await deleteUser(params)

                if (result.data == 'success') {
                    Dialog.confirm({
                        title: '删除成功',
                        message: '已删除该用户'
                    }).then(() => {
                        this.$router.go(0)
                    });

                }
            },
            jumpSingleDataCount:function (id) {

                this.$router.push({
                    path: '/SingleDataCount',
                    query: {
                        "id": id
                    }
                })
            }
        },
        setup() {

            const state = reactive({
                listResultArray: [],
            });
            onMounted(() => {

                getAllUserList();
            });

            const getAllUserList = async () => {
                let reusult = await getAllUser()

                console.log(reusult.data, 11111);
                state.listResultArray = reusult.data

            };

            return {
                ...toRefs(state)
            }

        },
    }
</script>

<style scoped lang="less">

    .page-root {

        display: flex;
        flex-direction: column;
        background: white;
        padding: 10px 25%;

        .user-item {
            border-bottom: 1px solid #f7f7f7;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            div {
                display: flex;
                flex-direction: column;

                span {
                    text-align: left;
                    color: #666666;
                    margin-top: 10px;
                    margin-left: 20px;
                    margin-bottom: 10px;
                    font-size: 0.9rem;
                }
            }

            .del-user {
                background: orangered;
                margin: auto 20px;
                color: white;
                font-size: 0.8rem;
                padding: 8px 25px;
                border-radius: 10px;
            }
        }

        .data-view-div {
            margin-top: 20px;
            margin-bottom: 20px;

            .btn-view {
                margin-left: 20px;
                border-radius: 10px;
                background: #42b983;
                color: white;
                padding: 10px 20px;

            }
        }

    }
</style>