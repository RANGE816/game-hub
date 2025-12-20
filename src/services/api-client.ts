import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '43d6fd4b25114563ab9a2fcbd62c9990'
    }
})