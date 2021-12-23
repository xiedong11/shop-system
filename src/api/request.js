import http from './axios'

const get = (url, params = {},type) =>
    http.get(
        url,
        params,
        type
    );

// http://conf.qb.chinaqw.com

const prefix = '/api';

const getConferenceList = data => get(`${prefix}/api/conference/getconferencelist?action=getConferenceList`, data, 'aaa');


//获取会议详情 主域名 http://im.qb.chinaqw.com/
const getMeetingInfoDetail=(data)=>get("circle/getConference",data)

//接口导出
export {

    getConferenceList,
    getMeetingInfoDetail

}
