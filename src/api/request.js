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

// http://conf.qb.chinaqw.com


const getConferenceList = data => get(`/api/conference/getconferencelist?action=getConferenceList`, data, 'aaa');

// 报名后表单项,报名资料
const getApplyData = data => get(`api/cusModel/selectUserMsg`, data)


//获取会议详情 主域名 http://im.qb.chinaqw.com/
const getMeetingInfoDetail = (data) => get("circle/getConference", data)


const getMeetingNewsList = (data) => post('qwapi/getMeetingReport.do', data)

const getMeetingEnrollInfo = (data) => get('api/cusContent/getEnrollInfo', data) //确认报名信息接口


const regisiter = (data)=> post('addNewUser',data)
const login = (data)=>post('login',data)
const addNewProduct = (data) =>post("addProduct",data)
const getAllList = () =>get('getAllList')
const getProductById = (data) =>get('getProductById',data)
const getProductByNumber = (data)=>get('getProductByNumber',data)
const getProductByLocation = (data)=>get('getProductByLocation',data)

//接口导出
export {
    getConferenceList,
    getMeetingInfoDetail,
    getMeetingNewsList,
    getApplyData,
    getMeetingEnrollInfo,
    regisiter,
    login,
    addNewProduct,
    getAllList,
    getProductById,
    getProductByLocation,
    getProductByNumber
}
