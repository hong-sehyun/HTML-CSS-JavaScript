//배열 filter 구현
// const myFilter = (item) => {
//     console.log(item);
// }

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

            let gubun = cbt2.textContent.replace(' 삭제', '');
            // console.log(gubun);
            //arr = myFilter(gubun, arr);

            let temp = [];
            for (let item of arr) {

                switch (gubun) {
                    case '사과':
                        if (item != '🍎') temp.push(item);
                        break;
                    case '바나나':
                        if (item != '🍌') temp.push(item);
                        break;
                    case '오렌지':
                        if (item != '🍊') temp.push(item);
                        break;
                    case '수박':
                        if (item != '🍉') temp.push(item);
                        break;

                }


            }
            arr = temp;

            // switch (gubun) {
            //     case '사과':
            //         arr.filter((item) => item != '🍎' ) ;
            //         break;
            //     case '바나나':
            //         arr.filter((item) => item != '🍌' ) ;
            //         break;
            //     case '오렌지':
            //         arr.filter((item) => item != '🍊' ) ;
            //         break;
            //     case '수박':
            //         arr.filter((item) => item != '🍉' ) ;
            //         break;
            // }
            //console.log(arr)
            //t1.value = arr.toString();
            // console.log("cbt2", arr);
            //ㄴ필터 자체에 for of 가 포함 되어 있는 것!!
            t1.value = arr.join(',');

        });
    }


    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (e) => {
            e.preventDefault();
              //        let gubun = cbt3.textContent.split('->')[0];
            let gubun = cbt3.textContent.replace(' 바꾸기', '');
            //           console.log(gubun)

            // let temp = [];

            // for (let item of arr) {
            //     switch (gubun) {
            //         case '사과':
            //             if (item == '🍎') temp.push('🥕');
            //             else temp.push(item);
            //             break;

            //         case '바나나':
            //             if (item == '🍌') temp.push('🍐');
            //             else temp.push(item);
            //             break;

            //         case '오렌지':
            //             if (item == '🍊') temp.push('🧀');
            //             else temp.push(item);
            //             break;

            //         case '수박':
            //             if (item == '🍉') temp.push('🥞');
            //             else temp.push(item);
            //             break;
            //     }
            // }
            // arr = temp;
            // t1.value = arr.join(',');


            //map 으로 '바꾸기' 하는 방법
            for (let item of arr) {
                switch (gubun) {
                    case '사과':
                        arr = arr.map((item) => item == '🍎' ? '🥕' : item);
                        break;
                    case '바나나':
                        arr = arr.map((item) => item == '🍌' ? '🍐' : item);
                        break;
                    case '오렌지':
                        arr = arr.map((item) => item == '🍊' ? '🧀' : item);
                        break;
                    case '수박':
                        arr = arr.map((item) => item == '🍉' ? '🥞' : item);
                        break;
                }
            }
            t1.value = arr.toString();


        });
    }



});