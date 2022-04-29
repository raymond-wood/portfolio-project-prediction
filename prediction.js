/* Prediction.js will produce a random
prediction message in the console on 
each run - Raymond Wood - 29-Apr-2022 */

// Add/remove/update prediction values here in this array
const predictionArray = [
    'you will meet a tall dark stranger.',
    'you will come into financial success.',
    'the sun will shine on you today.',
    'the stock markets will crash.',
    'choas will ensue.',
    'you will accompish great things.',
    'you will reunite with an old friend.',
    'you will meet the love of your life.',
    'it will rain today.',
    'tradgedy will occur.',
    'you will watch Grace and Frankie today.'];

//Choose and return a random string from the array
function randomString(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

console.log(`I predict that ${randomString(predictionArray)}`);


