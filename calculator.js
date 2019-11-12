const screen = document.getElementById("calculator__screen");
const last = document.getElementById("screen__last");
const current = document.getElementById("screen__current");
const result = document.getElementById("screen__result");
const keys = document.getElementById("calculator__keys");

function pulse(text) {
  if (current.textContent == "0") current.textContent = text;
  else current.textContent += text;
  try {
    result.textContent = "= " + eval(current.textContent);
  } catch (e) {
    if (e instanceof SyntaxError) {
      result.textContent = "= " + eval(current.textContent.slice(0, -1));
    }
  }
  result.style.display = "block";
  screen.scrollTop = screen.scrollHeight;
}

function clearScreen() {
  current.textContent = "0";
  result.textContent = "";
  result.style.display = "none";
}

function erase() {
  if (current.textContent != "0" && current.textContent.length == 1) {
    current.textContent = "0";
    result.textContent = "";
    result.style.display = "none";
  } else {
    current.textContent = current.textContent.slice(0, -1);
    try {
      result.textContent = "= " + eval(current.textContent);
    } catch (e) {
      if (e instanceof SyntaxError) {
        result.textContent = "= " + eval(current.textContent.slice(0, -1));
      }
    }
  }
}

function equal() {
  last.textContent += current.textContent + " " + result.textContent + "\r\n";
  current.textContent = result.textContent.slice(2);
  result.textContent = "";
  result.style.display = "none";
  screen.scrollTop = screen.scrollHeight;
}
