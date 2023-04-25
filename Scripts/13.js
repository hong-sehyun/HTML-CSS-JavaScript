// document.getElementById("h2id").innerHTML = "시작입니다";


//function show() {
//       alert("안녕하세요.");
//    event.preventDefault;

//  document.getElementById("h2id").innerHTML = "안녕하세요";


//}

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("h2id").innerHTML = '<img src="../img/1.png"> <img src="../img/2.png"> <img src="../img/3.png"> <img src="../img/4.png"> <img src="../img/5.png"><img src="../img/6.png">';



// })


// const show = () => {
//     event.preventDefault;

//     //랜덤수 생성
//     let n = Math.floor(Math.random() * 6) + 1;
// //    console.log(n);
// if(n = 1) {
//     document.getElementById("h2id").innerHTML = '<img src="../img/1.png">';
// }
// if(n = 2){
//     document.getElementById("h2id").innerHTML = '<img src="../img/2.png">';
// }
// if(n = 3){
//     document.getElementById("h2id").innerHTML = '<img src="../img/3.png">';
// }
// if(n = 4){
//     document.getElementById("h2id").innerHTML = '<img src="../img/4.png">';
// }
// if(n = 5){
//     document.getElementById("h2id").innerHTML = '<img src="../img/5.png">';
// }
// if(n = 6){
//     document.getElementById("h2id").innerHTML = '<img src="../img/6.png">';
// }

// document.getElementById("h2id").innerHTML = imgTag;

// //    document.getElementById("h2id").innerHTML =
//  //       '<img src="../img/1.png"> <img src="../img/2.png"> <img src="../img/3.png"> <img src="../img/4.png"> <img src="../img/5.png"><img src="../img/6.png">';
// }


//document.addEventListener("DOMContentLoaded", function(){} ); 
//js 코드는 함수 인수를 넣는게 아니라 함수 자체를 넣음. 이름없는 funtion이 생김. 이름 필요없음
//'컨텐츠가 로드 되면 함수 실행시켜줘' 라는 뜻

//const show = () => {
// event.preventDefault;
//   document.getElementById("h2id").innerHTML = "안녕하세요";

//}//함수명을 변수처럼 씀


// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("h2id").innerHTML = "시작입니다";
// });

document.addEventListener("DOMContentLoaded", () => {   //function 안쓰고 그냥 괄호만 열고 닫아도 됨.

    //    document.getElementById("h2id").innerHTML = "시작입니다";
    //    document.querySelector('#hdiv').innerHTML = "id 선택자: 시작입니다"
    const bt = document.createElement('button');
    bt.textContent = '확인';
    document.getElementById('hdiv').append(bt);
});

const show = () => {
    event.preventDefault;
    let n = Math.floor(Math.random() * 4)
    if(n = 0) {document.getElementById("fruits").innerHTML = 사과}
    else if(n = 1) {document.getElementById("fruits").innerHTML = 바나나}
    else if(n = 2) {document.getElementById("fruits").innerHTML = 수박}
    else if(n = 3) {document.getElementById("fruits").innerHTML = 포도}

}

document.addEventListener("DOMContentLoaded", () => {});