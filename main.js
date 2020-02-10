let inputView = document.getElementById("inputText");

function get(num) {
  inputView.value = inputView.value + num;
}

function equal() {
  const wartoscInputu = document.getElementById("inputText").value
  console.log(inputView)
  if (inputView)
    inputView.value = eval(wartoscInputu);
}

function clin() {
  inputView.value = ""
}