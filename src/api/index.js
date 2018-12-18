
import fly from './request'

const api = {
    login: (params) => fly.post('', params),
}
export default api