'use strict'
// Please don't delete the 'use strict' line above
// クリックイベント設定
const target = document.getElementsByTagName("img");
console.log(target);
const List = document.getElementsByClassName("List.img");
console.log(List);

function changeList(){
  // imgをクリックしたらchangeListが開かれる
  


target.addEventListener('click', changeList);
}






