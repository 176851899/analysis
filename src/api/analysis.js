import request from '@/utils/request'
// 获取档案分析数据
const getArchivalData=()=>request({
    method:'get',
    url:'/mock/news'
})
export {
    getArchivalData
}