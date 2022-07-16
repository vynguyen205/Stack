// TODO: Complete the 'counter' function below.
function counter() {
    let count = 0;
    //return an object with a increment method and decrement method.
    return {
        increment() {
            count++;
            console.log("count: ", count);
        },

        decrement() {
            count--;
            console.log("count: ", count);  

        },
        returnCount() {
            return count;
        }
        
    }
}

const myCounter = counter();
myCounter.increment();
myCounter.increment(); 
console.log(myCounter.returnCount());  // 2
module.exports = counter;
