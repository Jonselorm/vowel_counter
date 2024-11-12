const textinput = document.getElementById("inputText");
const result = document.getElementById("result");

function isvowel(text) {
  const vowels = ["a", "e", "o", "i", "u"];
  let count = 0;

  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function checkvowels() {
  const user_input = textinput.value;
  const vowelcount = isvowel(user_input);
  result.innerHTML = `the  number of vowels: ${vowelcount}`;
  reset()
}

function reset(){
    textinput.value="";
}
