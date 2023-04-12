// 16.html에서 버튼에 onclick 없이 자바스크립트로만 기능 만드는 법


document.addEventListener("DOMContentLoaded", () => {

    const bt1 = document.querySelector('#bt1');

    bt1.addEventListener('click', () => {
        event.preventDefault();

        //랜덤수 생성
        let n = Math.floor(Math.random() * 4) + 1;


        //사용자 입력 수 찾기

        let user = document.getElementById("result").innerHTML;

        const radios = document.querySelectorAll(`input[type=radio]`);
        for (let item of radios) {
            console.log(item);
            if (item.checked) {
                user = item.value;
                break;
            }
        }

        if (n == user) {
            document.querySelector("article h1").textContent = '주사위 게임 : 맞음'

        }

        // if (n === parseInt(user)) {
        //     document.querySelector("article h1").textContent = '주사위 게임 : 맞음'

        // } === 연산자를 이용해서 작동

        else {
            document.querySelector("article h1").textContent = '주사위 게임 : 틀림'

        }



        document.querySelector(".h2Class").innerHTML = `<img src = "../img/${n}.png">`;





    });

});//call back function