const funB = () => {
    console.log('funB');
}

document.addEventListener("DOMContentLoaded", () => {

    /*
     setTimeout(() => {
         console.log('A');
     }, 500);
     setTimeout(() => {
         console.log('B');
     }, 1000); //시간이 걸리면 B를 두고 다른 걸 먼저 처리한 뒤 호출. B가 가장 마지막에 뜸

     setTimeout(() => {
         console.log('C');
     }, 700);
    */



    //콜백 지옥
    
    setTimeout(() => {
        console.log('A');
        setTimeout(() => {
            console.log('B');

            setTimeout(() => {
                console.log('C');
            }, 700);
        
        }, 1000); 
    }, 500);

     /*
    A B C 순서로 실행. 이런 코드 지양해야됨
    => Promise 사용

    Fetch는 Promise형태로 반환
    */
    

    

})