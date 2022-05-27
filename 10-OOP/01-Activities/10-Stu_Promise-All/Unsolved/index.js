const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: If the duration is longer than maxDuration, reject() the promise
<<<<<<< HEAD
      if (duration >= maxDuration) {
        reject(new Error("This request timed out"));
      } else {
        // TODO: Otherwise resolve() the promise
        resolve(`Response received: ${duration} ms`);
      }
=======
      // TODO: Otherwise resolve() the promise
>>>>>>> 40197902a237d56700eab49478b04f4f0e3f60f4
    }, duration);
  });

const promises = apiCallDurations.map((duration) => callAPI(duration));

console.log('Promises array before the timeouts have finished: ', promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
<<<<<<< HEAD
Promise.all(promises)
  .then((resolved) => console.log(resolved))
  .catch((err) => console.log(err));
=======
>>>>>>> 40197902a237d56700eab49478b04f4f0e3f60f4
