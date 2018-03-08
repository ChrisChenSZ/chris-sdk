import FetchMock from 'fetch-mock'
FetchMock.mock('/login', (url, opts) => {
    const params = opts.params;
    let a = '18666874677'
    let b = {a:a}
    console.log(opts.params, +b.a, opts.account)
    if(+params.account === 18666874677 && + params.password === 123456 ){
        return {code:200, message:'susscen'}
    } else {
        return {code:400, message: '用户名错误'}
    }

})