document.addEventListener("DOMContentLoaded", () => {
    const cbt1s = document.querySelectorAll(".cbt1");
    const cbt2s = document.querySelectorAll(".cbt2");
    const cbt3s = document.querySelectorAll(".cbt3");
    const btReset = document.querySelector("#btReset");
    const t1 = document.querySelector('#t1');



    //배열의 초기화
    let arr = [];

    //버튼에 이벤트 추가
    //reset기능 구현
    btReset.addEventListener('click', (e) => {
        e.preventDefault();
        t1.value = '';
        arr = [];

    });

    //배열에 자료 추가
    for (let cbt1 of cbt1s) {
        cbt1.addEventListener('click', (e) => {
            e.preventDefault();
            //console.log(cbt1.textContent)

            switch (cbt1.textContent) {
                case '사과':
                    arr.push('🍎');
                    break;
                case '바나나':
                    arr.push('🍌');
                    break;
                case '오렌지':
                    arr.push('🍊');
                    break;
                case '수박':
                    arr.push('🍉');
                    break;
            }
            //console.log(arr)
            //t1.value = arr.toString();
            t1.value = arr.join(',');

        });
    }


    for (let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (e) => {
            e.preventDefault();
        });
    }


    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (e) => {
            e.preventDefault();
        });
    }



});