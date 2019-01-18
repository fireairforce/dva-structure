export default {
    axiosOptions(config){
        return {
            timeout: 3000,
            headers: config.token ?{'token': 'someway to get token'} : {},
            baseURL: 'http://neuqsecurity.lyzwhh.top/' // set request baseURL here
        }
    }
}