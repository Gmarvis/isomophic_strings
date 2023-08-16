let wordOne = document.getElementById("word-one");
let wordTwo = document.getElementById("word-two");
const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  isIsomophic();
});

const isIsomophic = (s, t) => {
  s = wordOne.value;
  t = wordTwo.value;

  if (!s || !t) {
    document.getElementById("status").innerText = "please fill all inputs";
    document.getElementById("status").style.color = "red";
    return;
  }

  if (s.length !== t.length) {
    document.getElementById("status").innerText =
      "please enter words of the same length";
    document.getElementById("status").style.color = "red";
    console.log("please enter words of the same length", s, t);
    return;
  }
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const firstLatterOfS = s[i];
    const firstLatterOft = t[i];
    if (map[firstLatterOfS] === undefined) {
      map[firstLatterOfS] = firstLatterOft;
    } else if (map[firstLatterOfS] !== firstLatterOft) {
      document.getElementById("status").innerText = "false";
      document.getElementById("status").style.color = "red";
      return;
    }
  }
  document.getElementById("status").innerText = "true";
  document.getElementById("status").style.color = "green";
  return;
};
