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

//接口导出
export {

    getConferenceList,

}
