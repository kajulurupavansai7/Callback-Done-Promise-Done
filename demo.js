function callbackDemo(cb) {
setTimeout(() => cb("Callback Done"), 1000);
}
callbackDemo(msg => console.log(msg));
function promiseDemo() {
return new Promise(res => setTimeout(() => res("Promise Done"), 1000));
}
promiseDemo().then(console.log);
async function asyncDemo() {
const res = await promiseDemo();
console.log(res);
}
asyncDemo();