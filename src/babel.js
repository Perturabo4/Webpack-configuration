async function start() {
    return await Promise.resolve('Async is working')
}

start().then(data => console.log(data));

class Util {
    static id = Date.now()
}

console.log(Util.id);