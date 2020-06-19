import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8081/"

// 获取steam游戏数据
export const getGameDate = (device)=>{
    return axios.get(`/api/Games/${device}`).then(ret=>ret.data);
}

// 获取首页推荐图片
export const getRecommendImgs = ()=>{
    return axios.get("/api/home/recommend").then(ret=>ret.data);
}

// 获取首页轮播图信息
export const getSwiperImgs = ()=>{
    return axios.get("/api/home/swiper").then(ret=>ret.data);
}

// 获取今日推荐信息
export const getRecommendArticle = ()=>{
    return axios.get("/api/home/recommend_article").then(ret=>ret.data);
}

// 获取板块数据
export const getPads = ()=>{
    return axios.get("/api/home/pads").then(ret=>ret.data);
}