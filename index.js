function add(a, b) {
    return a + b;
}
const onceAdd = once(add);
console.log(onceAdd(1, 2)); // 3
console.log(onceAdd(2, 2)); // 3

function once (callback) {
    let callOnce = false;
    return function() {
        if (callOnce) return funInMemory;
        callOnce = true;
        funInMemory = callback.apply(this, arguments);
        callback = undefined;
        return funInMemory;
      };
}