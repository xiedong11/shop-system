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

//接口导出
export {
    getConferenceList,
    getMeetingInfoDetail,
    getMeetingNewsList,
    getApplyData

}
