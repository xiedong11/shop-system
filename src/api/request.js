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



const regisiter = (data)=> post('addNewUser',data)
const login = (data)=>post('login',data)
const addNewProduct = (data) =>post("addProduct",data)
const getAllList = () =>get('getAllList')
const getProductById = (data) =>get('getProductById',data)
const getProductByNumber = (data)=>get('getProductByNumber',data)
const getProductByLocation = (data)=>get('getProductByLocation',data)
const getAllUser = ()=>get('getAllUser')
const deleteUser = (data)=>get('deleteUser',data)
const getAllListByUserId = (data) =>get('getAllListByUserId',data)
const sendMessageToUser = (data) =>post('sendMessageToUser',data)
const queryMessage = (data) =>get('queryMessage',data)
const delMessage = (data) =>get('delMessage',data)


//接口导出
export {
    regisiter,
    login,
    addNewProduct,
    getAllList,
    getProductById,
    getProductByLocation,
    getProductByNumber,
    getAllUser,
    deleteUser,
    getAllListByUserId,
    sendMessageToUser,
    delMessage,
    queryMessage
}
