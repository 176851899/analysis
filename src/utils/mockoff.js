/***
 *  mockOff - 控制是否启用mock
 *   -判断是否为开发环境
 * */
 (async()=>{
    const l ='./mock/index.js'
    console.log(process.env.NODE_ENV === 'development')
  if(process.env.NODE_ENV === 'development') {
       try{
         await import('../mock/index.js')
        // console.log('mock开启',)
        
       }
       catch(e){
              console.log('mock开启异常')
       }
  }else{
    console.log("mock禁用")
  }
      
})()
