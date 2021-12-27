import axios from "axios";
import Qs from "qs";
import * as Base64 from "js-base64";


//设置超时
axios.defaults.timeout = 10000;

export default {
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                url,
                data: Qs.stringify(data)
            })
                .then(res => {
                    resolve(JSON.parse(Base64.decode(res.data)))
                })
                .catch(err => {
                    reject(err)
                });
        })
    },
    get(url, data, type) {
        if (type == 'json' && Object.keys(data).length) {
            for (let key in data) {
                url += `/${data[key]}`;
            }
            url = url + '.json';
            return new Promise((resolve, reject) => {
                axios({
                    method: 'get',
                    url,
                })
                    .then(res => {
                        resolve(res)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        } else {
            return new Promise((resolve, reject) => {
                axios({
                    // method: 'get',
                    url,
                    params: data,
                })
                    .then(res => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }


    }
};