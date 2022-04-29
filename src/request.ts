import axios from "axios";

axios.defaults.timeout = 20000;

// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(
    config => {
        // 处理请求之前的配置
        config.headers = config.headers || {};
        return config;
    },
    error => {
        // 请求失败的处理
        return Promise.reject(error);
    }
);

// 响应拦截（配置请求回来的信息）
axios.interceptors.response.use(
    res => {
        // 处理响应数据
        removePending(res.config); //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
        store.state.loadding = false; //在这里对返回的数据进行处理
        return res;
    },
    error => {
        // 处理响应失败
        return Promise.resolve(error.response);
    }
);

export default {
    request(data) {
        let reqData = data.data || {};

        let requestData = {
            url: data.url,
            data: reqData,
            method: data.method || "GET",
            params: data.params || {},
            onUploadProgress: data.onUploadProgress || null,
            headers: data.headers || "",
            responseType: data.responseType || "json"
        };
        return axios(requestData);
    },
    download(url) {
        return this.request({ url, responseType: "arraybuffer" });
    },
    get(url, type, headers) {
        return this.request({ url, responseType: type, headers: headers });
    },
    post(url, data, responseType, params) {
        return this.request({
            url,
            data,
            params,
            method: "POST",
            responseType: responseType
        });
    },
    put(url, data) {
        return this.request({
            url,
            data,
            method: "PUT"
        });
    },
    remove(url, data) {
        return this.request({ url, data, method: "DELETE" });
    },
    getContext() {
        return utils.sessionGetItem("context") || window.context;
    },
    parseUrl(url) {
        if (url === "") return;
        var ctx = this.getContext(),
            reg = /^(\$\{(\w+)\})\/.*$/;
        var match = reg.exec(url);
        if (match != null) {
            var name = match[2],
                mc = match[1],
                val = ctx[name];
            if (!val) {
                throw new Error(
                    "The '" +
                    name +
                    "' in url:" +
                    url +
                    " does not defined in context provider."
                );
            }
            return url.replace(mc, val);
        } else {
            return url;
        }
    }
};