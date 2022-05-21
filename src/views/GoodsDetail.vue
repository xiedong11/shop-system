<template>
    <div class="page-root">

<!--        <span class="Goods-title">{{listResult.title}}</span>-->
        <img :src="listResult!=null?listResult.picture:''"/>

        <div class="like-view">
            <div @click="updateLikeState(0)">
                <img src="../image/dislike.png">
                <span>{{listResult.dislike_count}}</span>
            </div>

            <div @click="updateLikeState(1)">
                <img src="../image/like.png">
                <span>{{listResult.like_count}}</span>
            </div>
        </div>
        <div class="collection-view">
            <span class="collection-Goods" @click="updateCollectionState">{{$t(`message.btn_collection`)}}</span>
        </div>

        <span>{{$t(`message.type`)}}：{{listResult.type}}</span>
        <span>{{$t(`message.time`)}}：{{listResult.createAt}}</span>

        <span>{{$t(`message.content`)}}：{{listResult.content}}</span>




        <div class="comment-list" v-show="showCommentView==true">
            <span>{{$t(`message.user_Comment`)}}</span>

            <div class="list-item" v-for="(item,index) in commentArr" :key="index">
                <span>{{$t(`message.Auther`)}}：{{item.userName}}</span>
                <span>{{item.content}}</span>
                <span>{{item.createAt}}</span>
            </div>
        </div>

        <div class="comment-input-view" v-show="showCommentView==false">
            <textarea :placeholder="$t(`message.input_comment_content`)" id='content'/>
            <span @click="addNewComment">{{$t(`message.btn_comment`)}}</span>
        </div>

        <span class="new-comment" @click="onNewComentClick" v-show="showCommentView">
            +
        </span>

    </div>

</template>

<script>
    import {onMounted, reactive, toRefs} from "vue";
    import {
        addCollection,
        addComment,
        getProductById,
        getCommentByGoodsId,
        updateGoodsInfo,
    } from "../api/request";
    import {useRouter} from 'vue-router'
    import {Dialog} from "vant";

    export default {
        name: "ProductDetail",

        setup() {
            const router = useRouter()

            const state = reactive({
                listResult: {},
                id: router.currentRoute.value.query.id,
                commentArr: {},
                showCommentView: true,
                collected: false
            });


            onMounted(() => {
                getProduct();
                getAllCommentListByGoodsId()
            });

            const updateLikeState = async (likeState) => {

                let GoodsEntity = state.listResult
                if (likeState == 1) {
                    GoodsEntity.like_count = GoodsEntity.like_count + 1
                } else {
                    GoodsEntity.dislike_count = GoodsEntity.dislike_count + 1
                }
                let result = updateGoodsInfo(GoodsEntity)
                if (result.msg == "success") {
                    if (result.msg == "success") {
                        getProduct();
                    }

                }
            }
            const updateCollectionState = async () => {

                let collectionEntity = {}
                let GoodsEntity = state.listResult
                collectionEntity.title = GoodsEntity.title
                collectionEntity.content = GoodsEntity.content
                collectionEntity.picture = GoodsEntity.picture
                collectionEntity.type = GoodsEntity.type
                collectionEntity.userId = localStorage.getItem('userId')
                collectionEntity.goodsId = GoodsEntity.id

                let result = await addCollection(collectionEntity)
                if (result.msg == "success") {
                    Dialog.confirm({
                        title: '收藏成功'
                    }).then(() => {
                        // getProduct();
                    }).catch(() => {
                        // on cancel
                    });
                }
            }
            const onNewComentClick = () => {
                state.showCommentView = !state.showCommentView
            }

            const getAllCommentListByGoodsId = async () => {
                let data = {
                    "goodsId": router.currentRoute.value.query.id,
                }

                let result = await getCommentByGoodsId(data)
                state.commentArr = result.data
            }
            const addNewComment = async () => {
                let userName = localStorage.getItem('userName')
                let userId = localStorage.getItem('userId')
                let content = document.getElementById('content').value
                let data = {
                    "content": content,
                    "goodsId": router.currentRoute.value.query.id,
                    "userId": userId,
                    "userName": userName
                }

                let result = await addComment(data)

                console.log(result, 111)

                if (result.msg == 'success') {
                    Dialog.confirm({
                        title: '评论成功'
                    }).then(() => {
                        state.showCommentView = true
                        getAllCommentListByGoodsId()
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
            const getProduct = async () => {
                let params = {
                    'id': state.id
                }
                let reusult = await getProductById(params)
                console.log(reusult.data, 11111);
                state.listResult = reusult.data[0]
            }
            return {
                ...toRefs(state),
                addNewComment,
                updateLikeState,
                onNewComentClick,
                updateCollectionState
            }

        },
    }
</script>

<style scoped lang="less">

    .page-root {
        display: flex;
        flex-direction: column;
        background: white;

        img {
            margin: 10px 20%;
            max-height: 150px;
        }


        .Goods-title{
            text-align: center;
            color: #333333;
            margin-top: 50px;
            font-size: 2rem;
        }
        span {
            text-align: left;
            margin-left: 20%;
            margin-top: 10px;
            font-size: 0.9em;
            color: #333333;
        }

        .new-comment {
            background: #2facff;
            color: white;
            font-size: 2rem;
            width: 60px;
            height: 60px;
            text-align: center;
            position: fixed;
            bottom: 50px;
            right: 100px;
            line-height: 60px;
            border-radius: 30px;
        }

        .comment-input-view {
            display: flex;
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;

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
                    color: #666666;
                }
            }
        }

        .collection-view {
            margin-right: 20%;
            margin-left: auto;
            display: flex;
            flex-direction: row;



            .collection-Goods {
                margin-left: 0%;
                margin-top: 10px;
                font-size: 0.9em;
                color: #f7f7f7;
                padding: 10px 20px;
                width: 100px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                justify-content: center;
                background: #bca080;
                border-radius: 10px;
            }
        }
        .like-view {
            display: flex;
            flex-direction: row;
            text-align: right;
            justify-content: right;
            margin-right: 20%;
            margin-left: auto;

            div {
                margin-left: 30px;
                display: flex;
                flex-direction: row;

                img {
                    height: 25px;
                    width: 25px;
                }
            }

        }
    }
</style>