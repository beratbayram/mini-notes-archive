/*
Please refer to keynotes first !

TRANSPARENT CAHING OPERATOR

Let’s say we have a function slow(x) which is CPU-heavy,
but its results are stable. In other words, for the same
x it always returns the same result.If the function is
called often, we may want to cache (remember) the results
to avoid spending extra-time on recalculations.But 
instead of adding that functionality into slow() we’ll 
create a wrapper function, that adds caching.

Source: https://javascript.info/call-apply-decorators
*/

let worker = {
    slow(min, max) {
        alert(`Called with ${min},${max}`);
        return min + max;
    }
};

function hash() {
    alert([].join.call(arguments)); //Func borrowing
}

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
        //Combines args into a str
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }
        // call it normally
        let result = func.call(this, ...arguments);

        cache.set(key, result);
        return result;
    };
}

// Call forwarding in action
worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5)); // works
alert("Again " + worker.slow(3, 5)); // same (cached)