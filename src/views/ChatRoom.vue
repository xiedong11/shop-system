<template>
    <div class="page-root">


        <div class="comment-list">
            <span class="title">{{$t(`message.chat_room`)}}</span>

            <div class="list-item" v-for="(item,index) in chatArr" :key="index">
                <span>{{$t(`message.Auther`)}}：{{item.userName}}</span>
                <span>{{item.content}}</span>
                <span>{{item.createAt}}</span>
            </div>
        </div>

        <div class="comment-input-view">
            <textarea :placeholder="$t(`message.input_comment_content`)" id='content'/>
            <span @click="addNewComment">{{$t(`message.btn_comment`)}}</span>
        </div>


    </div>
</template>

<script>
    import {onMounted, reactive, toRefs} from "vue";
    import {addChat, getAllChatList,} from "../api/request";
    import {Dialog} from "vant";

    export default {
        name: "ChatRoom",
        setup() {

            const state = reactive({
                chatArr: {},
            });


            onMounted(() => {
                getAllList()
            });


            const getAllList = async () => {
                let result = await getAllChatList()
                state.chatArr = result.data
            }
            const addNewComment = async () => {
                let userName = localStorage.getItem('userName')
                let userId = localStorage.getItem('userId')
                let content = document.getElementById('content').value
                let data = {
                    "content": content,
                    "userId": userId,
                    "userName": userName
                }

                let result = await addChat(data)

                console.log(result, 111)

                if (result.msg == 'success') {
                    Dialog.confirm({
                        title: '评论成功'
                    }).then(() => {
                        getAllList()
                    }).catch(() => {
                        // on cancel
                    });
                } else {
                    Dialog.confirm({
                        title: '添加' +
                            '失败'
                    }).then(() => {
                        // window.location.href = "tel:" + this.detailResult.hotLine;
                    }).catch(() => {
                        // on cancel
                    });
                }


            }

            return {
                ...toRefs(state),
                addNewComment,
            }

        },
    }
</script>

<style scoped lang="less">

    .page-root {
        display: flex;
        flex-direction: column;
        background: white;
        background: #333333;


        .title {
            text-align: center;
            color: white;
            margin-top: 50px;
            font-size: 2rem;
        }

        span {
            text-align: left;
            margin-left: 20%;
            margin-top: 10px;
            font-size: 0.9em;
            color:white;
        }


        .comment-input-view {
            display: flex;
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            position: fixed;
            bottom: 0px;
            right: 0px;
            left: 0px;

            textarea {
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                width: 300px;
                border-radius: 10px;
                padding-left: 10px;
                height: 65px;
                font-size: 0.7rem;
            }

            span {
                margin-top: 30px;
                background: #9c1668;
                color: white;
                padding: 10px 30px;
                border-radius: 10px;
                margin-right: auto;
                margin-left: auto;
            }
        }

        .comment-list {
            border-radius: 20px;
            margin-top: 30px;
            display: flex;
            flex-direction: column;

            .list-item {
                justify-content: left;
                display: flex;
                flex-direction: column;
                text-align: left;
                margin-top: 10px;


                span {
                    text-align: left;
                    margin-top: 10px;
                    font-size: 0.6em;
                    color: white;
                }
            }
        }


    }
</style>