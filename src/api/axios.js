import axios from "axios";


//设置超时
axios.defaults.timeout = 10000;
axios.defaults.baseURL="http://localhost:80";

export default {
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                url,
                data: data
            })
                .then(res => {
                    resolve(res.data)
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