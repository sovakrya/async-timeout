function asyncTimeout(time){
    return new Promise((res) => {
        return setTimeout(res, time)
    })
}