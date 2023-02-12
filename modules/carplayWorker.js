const Carplay = require('./Carplay')
const {workerData} = require('worker_threads')
console.log(workerData)
carplayWorker(workerData)
function carplayWorker(config) {
    console.log("in worker", config)
    const carplay = new Carplay(config)
}

