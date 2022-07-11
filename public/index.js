async function getRequest() {
  let response = await fetch("/");
  let data = await response.text();
  console.log(data);
}

async function postRequest() {
  const options = {
    method: "POST",
    body: JSON.stringify("salut"),
  };

  const response = await fetch("/", options);
  let data = await response.text();
  console.log(data);
}

// getRequest();
// postRequest();

function ajaxPost() {
  const postObj = {
    id: 1,
    title: "What is AJAX",
    body: "AJAX stands for Asynchronous JavaScript...",
  };

  let post = JSON.stringify(postObj);

  const url = "/post";
  let xhr = new XMLHttpRequest();

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.send(post);

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Post successfully created!");
    }
    console.log("coucou");
  };
}

getRequest();
postRequest();
//ajaxPost();
