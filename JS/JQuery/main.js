// document.querySelector;
// document.getElementsByClassName;
// document.getElementsByTagName;

console.log(window.$, $);

const h1 = document.querySelector("h1");
const h1a = document.getElementsByTagName("h1")[0];

$("h1").html("Hello Jquery");
$("article > #paragraph > span").html("<strong>This text was updated</strong>");

$("h1").append("<h2>!</h2>");
$("h1").append($("#paragraph"));

$("h1").before("<h2>Before Text</h2>");
$("h1").after("After text");

// $("h3").append("1");

$("h3").each(function (index, element) {
  console.log(index, element);
  //   element.textContent = element.textContent + index;
  $(element).append(` ${index + 1}`);
});

$("h3").even().css("color", "blue");
$("h3")
  .odd()
  .html("Odd")
  .css({ "background-color": "teal", padding: "10px 5px" });

$.each([1, 2, 3, 4, 5, 6, 7, 8, 9], (index, element) => {
  console.log(element, index, "!");
});

$("h3")
  .filter((index, element) => index >= 1)
  .html("filtered");

$("h3").filter(":nth-child(2n)").html("nth child in filter");

$("p").find("span").css("background", "purple");

console.log(
  $("p")
    .map((index, element) => $(element).text())
    .each((index, element) => console.log(element)),
  "elements after map"
);

console.log($(".wrapper").is("div"));

$("#btn-1").on("click", function () {
  const colors = ["red", "black", "green", "teal", "darkred", "yellow"];

  $(this).css(
    "background-color",
    colors.at(Math.floor(Math.random() * colors.length))
  );
});

$("#btn-2").click(() => console.log("Click"));

$("html").mousemove((event) => {
  $("h1").html(`
    <h2>X: ${event.pageX}</h2>
    <h2>Y: ${event.pageY}</h2>
  `);

  //   $("h2").offset({
  //     left: event.pageX,
  //     top: event.pageY,
  //   });
});

// $("html").fadeOut(1000).fadeIn(1000);

// - Якщо лічильник перевищує 10 - кнопка плавно зникає зі сторінки
// - Якщо лічильник менший за -10 то він онулюється
// - Якщо лічильник перевищує 20 - зникає вся сторінка

{
  /* <h3 id="counter"></h3>
<button id="counter-button">Counter</button> */
}

let counter = 0;

$("#counter").html(counter);

$("#counter-button").click(() => {
  counter = counter + 1;
  $("#counter").html(counter);

  if (counter > 10) return $("#counter-button").fadeOut(1000);
  if (counter < -10) return (counter = 0);
  if (counter > 20) $("html").fadeOut(1000);
});

$.ajax({
  //   type: "GET",
  url: "https://jsonplaceholder.typicode.com/todos",
  //   data: "data",
  success: (response) => {
    console.log(response, "response");
  },
  error: (err) => {},
});

$.ajax({
  type: "POST",
  url: "https://jsonplaceholder.typicode.com/todos1111111111",
  data: {
    userId: 1,
    id: 1,
    title: "Main todo",
    isCompleted: false,
  },
  success: (response) => {
    console.log(response);
  },
  error: (error) => {
    console.log(error);
  },
});

// concat
[1, 2].concat([3]);

const combined = $.merge([1, 3, 4, 5, 6, 7, 8], [2]);
console.log(combined, "combined");

// NodeList

const arrOfLi = $.makeArray($("p"));
console.log(arrOfLi, "arrOfLi");

const numbers = [1, 2, 3, 4, 5];

console.log($.inArray(3, numbers), "inArray");

// $.map;
// $.each;
// $.filter;

console.log($.now(), "now", Date.now(), new Date());

$.when(new Promise((res) => res("Resolved"))).done((res) => {
  console.log(res, "!!");
});

// Animations

$("#square").css({
  width: "100px",
  height: "100px",
  background: "blue",
  position: "absolute",
});

$("#square")
  .hide(2000)
  .show(1000)
  .animate({ left: "+=400", top: "-=400" }, 1000)
  .delay(2000)
  .animate({ left: "-=400", top: "+=400" }, 1000);

$("#square").wrap("<section>Hello</section>");
