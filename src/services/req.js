import request from '../utils/request';
import API from '../config/api';

export const handleLogin = (data) => request({
    url: API.webLogin,
    method: 'post',
    data
}) 