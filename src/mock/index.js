//  模拟数据
// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock档案接收和转出
const produceNewsData = function () {
  const newsList = []
  const List = []
  const obj = {}
  for (let i = 0; i < 6; i++) {
    const num1 = Random.increment(parseInt(Math.random() * 1000 + 200))
    const num = Random.increment(parseInt(Math.random() * 1000 + 200))
    newsList.push(num)
    List.push(num1)
  }
  //  档案转入和转出
  obj.year = '2022'
  obj.title = '档案转入和转出'
  obj.into = newsList
  obj.out = List
  obj.code = 200
  return obj
}
// 请求该url，就可以返回newsList
Mock.mock('/mock/news', 'get', produceNewsData) // 后面讲这个api的使用细节
