// //회문 체크 함수
// const palindrome = () => {
//     console.log(palindrome);
// }


// //숫자 합계
// const numSum = () => {
//     console.log(numSum);
// }
// ㄴ만약 이렇게 쓰면 돔 가져와야됨

const palindrome = (t1, t2) => {
    let s = t1.value;

    //  입력 내용이 없는 경우
    if (s.length == 0) return;
    console.log(palindrome);

    //입력한 내용이 있는 경우
    let rs = '';
    //방법1
    // for (let i = s.length - 1; i >= 0; i--) {
    //     rs = rs + s[i];
    // }
    // console.log("s=", s, ", rs=", rs);


    //방법2 : 배열이용
    s = s.split('');  //공백없이 따옴표 붙여쓰면 단어 쪼개줌. 문자열 split() 메서드는 문자열을 분리자로 분리해서 배열 만듦
    s = s.reverse();  // 배열.reverse(); 배열의 요소를 뒤집기
    //rs = s.toStrng(); <<쉼표가 붙음
    rs = s.join(); //배열.join(); 배열의 문자열을 문자열로 묶어줌

    console.log("s=", s, ", rs=", rs);






    //결과확인
    if (t1.value == rs) {
        t2.value = "회문입니다";
    } else {
        t2.value = "회문이 아닙니다"
    }
}


//숫자합계
const numSum = (t1, t2) => {
    let s = t1.value;
    console.log(s)

    //문자열 순회
    let sum = 0;
    for (let ch of s) {

        if (!isNaN(ch)) sum = sum + parseInt(ch);


        console.log(ch, isNaN(ch));
    }
    t2.value = sum;


}


document.addEventListener("DOMContentLoaded", () => {
    //돔이 다 만들어진 다음에 콜백 함수에 있는 함수를 실행할거야 라는 뜻

    //변수 잡아내기
    //DOM요소 가져오기

    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');

    //const txts = document.querySelectorAll("input[type=text]");
    //  ㄴ이렇게 해도 됨


    const bts = document.querySelectorAll(".bt");


    //버튼 배열에 클릭이벤트 작성

    for (let bt of bts) {
        //console.log(bt); // 개발자 도구에서 버튼이 두번 찍히는지 확인
        bt.addEventListener('click', (event) => {
            event.preventDefault();
            //let gubun = bt.innerHTML ;
            //console.log(gubun); 

            let gubun = bt.getAttribute('id').slice(-1);
            // slice 는 bt1 or bt2 아이디의 마지막 한자리 잘라낸다는 뜻. 
            // bt1의 '1'만 가져오거나 bt2의 '2'만 가져오기 위해
            // 이 기능을 안쓰면 getlength를 활용해야됨


            if (gubun == 1) palindrome(t1, t2);
            //데이터 타입까지 보려면 (gubun === '1')
            else numSum(t1, t2);

            console.log(gubun);
        });
    }

});