import http from './axios'

const get = (url, params = {}, type) =>
    http.get(
        url,
        params,
        type
    );


const post = (url, data = {}) =>
    http.post(
        url,
        data,
    );


const regisiter = (data) => post('addNewUser', data)
const login = (data) => post('login', data)
const addNewProduct = (data) => post("addGoods", data)
const getAllList = (data) => get('getAllGoodsList',data)
const getProductById = (data) => get('getGoodsById', data)
const getAllRentListByUserId = (data) => get('getAllRentListByUserId', data)
const getGoodsByType = (data) => get('getAllListByType', data)
const getGoodsByName = (data) => get('getGoodsByName', data)
const getAllUser = () => get('getAllUser')
const deleteUser = (data) => get('deleteUser', data)
const getAllListByUserId = (data) => get('getAllListByUserId', data)
const sendMessageToUser = (data) => post('sendMessageToUser', data)
const queryMessage = (data) => get('queryMessage', data)
const delMessage = (data) => get('delMessage', data)
const delGoodsById = (data) => get('delGoodsById', data)
const addComment = (data) => post("addComment", data)
const addChat = (data) => post("addChat", data)
const getCommentByGoodsId = (data) => get('getCommentByGoodsId', data)
const updateGoodsInfo = (data) => post('updateGoodsInfo', data)
const addRent = (data) => post('addRent', data)
const getAllFeedbackList = () => get('getAllFeedbackList')
const getAllCollectionListByUserId = (data) => get('getAllCollectionListByUserId', data)
const delCollection = (data) => get('delCollection', data)
const addCollection = (data) => post('addCollection', data)
const updateUser = (data) => post('updateUser', data)
const getUserById = (data) => get('getUserById', data)
const getAllGoodsByUserId = (data) => get('getAllGoodsByUserId', data)
const getAllChatList = () => get('getAllChatList')

//接口导出
export {
    regisiter,
    login,
    addNewProduct,
    getAllList,
    getProductById,
    getGoodsByName,
    getGoodsByType,
    getAllUser,
    deleteUser,
    getAllListByUserId,
    sendMessageToUser,
    delMessage,
    queryMessage,
    delGoodsById,
    addComment,
    addChat,
    getCommentByGoodsId,
    updateGoodsInfo,
    getAllFeedbackList,
    getAllRentListByUserId,
    addRent,
    getAllCollectionListByUserId,
    addCollection,
    delCollection,
    getUserById,
    updateUser,
    getAllChatList,
    getAllGoodsByUserId
}
