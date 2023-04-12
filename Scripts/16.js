const show = () => {
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

    else {
        document.querySelector("article h1").textContent = '주사위 게임 : 틀림'

    }



    document.querySelector(".h2Class").innerHTML = `<img src = "../img/${n}.png">`;




    //     if(user == n) {
    //         document.querySelector(".h2Class").innerHTML =`<img src = "../img/${n}.png">`;
    //         document.querySelector(".h3Class").innerHTML = "일치";


    //     //    alert("일치");
    //     }
    // else {
    //     document.querySelector(".h2Class").innerHTML =`<img src = "../img/${n}.png">`;
    //     document.querySelector(".h3Class").innerHTML = "불일치";
    //     //    alert("불일치");
    // }

}