var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for(var i = 0; i < 5; i++) {
        console.log(data[i]);
        var gitHub = document.createElement("h3")
        gitHub.textContent = data[i].url;
        gitHub.href = data[i].url;
        userContainer.append(gitHub);

        var userName = document.createElement("p");
        userName.textContent = data[i].login;
        userContainer.append(userName);
      }
    });
}
fetchButton.addEventListener('click', getApi);
