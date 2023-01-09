const { generateImage } = require("../../controllers/openaiControllers");

function onSubmit(e) {
  e.preventDefault();

  //get data
  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (prompt === "") {
    alert("Add text");
    return;
  }

  //   console.log("success");
  generateImageRequest(prompt, size);
}

document.querySelector("#image-form").addEventListener("submit", onSubmit);
