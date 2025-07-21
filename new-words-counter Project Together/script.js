const pdfReceiverBox = document.getElementById("upload-box");
const countBtn = document.getElementById("count-btn");
const fileInput = document.getElementById("pdfFileInput");
const fileName = document.getElementById("fileName");
const result = document.getElementById("word-count-displayer");

let selectedFile = null;

fileInput.addEventListener("change", function () {
  fileName.textContent = this.files[0].name
  selectedFile = this.files
  console.log(selectedFile)
})




countBtn.addEventListener("click", function () {
  if (!selectedFile[0].size === 0) {
    result.textContent`there no words to count`
  }
  result.textContent = `Words in the document : ${selectedFile[0].size}`
})


