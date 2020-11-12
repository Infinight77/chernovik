//t1-------------------------------------------
/*let divTag = document.querySelectorAll("div");
console.log(divTag);
let idDiv = document.getElementById("first");
console.log(idDiv);
idDiv.style.background = "red";
let divClass = document.querySelector(".divClassSecond");
console.log(divClass);*/

//t2--------------------------------------------

/*const tagNameSetting = (a) => document.getElementsByTagName(a);
console.log(tagNameSetting("h1"));*/

//t3---------------------------------------------------------
function bump(tagName, innerText, className) {
  let tag = document.createElement(tagName);
  tag.append(innerText);
  conf = confirm("Добавить класс элементу?");
  if (conf) {
    tag.className = className;
  }
  return tag;
}

console.log(bump("p", "Billy", "className"));
let newElm = bump("p", "Billy", "className");
document.body.append(newElm);
