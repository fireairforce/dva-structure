export default {
    axiosOptions(config){
        return {
            timeout: 3000,
            headers: config.token ?{'token': 'someway to get token'} : {},
            baseURL: '' // set request baseURL here
        }
    }
}