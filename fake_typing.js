let para =
  "Hi there! Keep doing what you need to do! It's a beautiful night, we're looking for something dumb to do. Hey baby, I think I wanna marry you. Is it the look in your eyes or is it this dancing juice? Who cares, baby, I think I wanna marry you";
let para_arr = para.split("");
let text1_arr = document.getElementById("texting").value.split("");

function generate_text() {
  console.log("changed");
  let text2_arr = document.getElementById("texting").value.split("");

  if (text2_arr.length > text1_arr.length) {
    for (let i = 0; i < text2_arr.length; i++) {
      text1_arr[i] = para_arr[i];
    }
  } else {
    text1_arr = text2_arr;
  }
  document.getElementById("texting").value = text1_arr.join("");
}
