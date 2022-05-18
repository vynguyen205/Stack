var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
<<<<<<< HEAD
  console.log(response.status)
  // If that status equals the conditional, then redirect to the 404 page.
  if (response.status === 404) {
    document.location.replace(redirectUrl);
  }else {
    return response.json();
  }
=======
  // If that status equals the conditional, then redirect to the 404 page.
>>>>>>> 2e433d80a11db2ce87a64fe41574453d9f217b22
});
