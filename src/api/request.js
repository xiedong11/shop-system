import http from './axios'

const get = (url, params = {},type) =>
    http.get(
        url,
        params,
        type
    );



const prefix = 'http://conf.qb.chinaqw.com';

const getConferenceList = data => get(`${prefix}/api/conference/getconferencelist?action=getConferenceList`, data, 'json');

//接口导出
export {

    getConferenceList,

}
