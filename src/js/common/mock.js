import FetchMock from 'fetch-mock'
FetchMock.mock('/login', (url, opts) => {
    const params = opts.params;
    if(opts.account === 18666874677 && opts.password === 123456 ){
        return {code:200, message:'susscen'}
    } else {
        return {code:400, message: '用户名错误'}
    }

})