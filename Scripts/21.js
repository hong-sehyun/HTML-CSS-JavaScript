document.addEventListener("DOMContentLoaded", () => {
    const boxdt = document.querySelector('#boxdt');
    

    boxdt.addEventListener('change', () => {
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';

        url = url + boxdt.value.replaceAll("-","");
        console.log(url);



        
        fetch(url)
        .then((resp) => resp.json())
        //ㄴ콜백안에 비동기가 들어감. 콜백안에 콜백. 한줄콜백
        .then((data) => {
            let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
            //console.log(boxlist);
            let boxTag = '';
            for(let box of boxlist) {

                
                console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten);
                boxTag = boxTag + '<details>';
                boxTag = boxTag + `<summary> <span id ="rk">${box.rank}</span>  ${box.movieNm}</summary>`;
                boxTag = boxTag + '<ul>';
                boxTag = boxTag + `<li> 순위 : ${box.rank} </li>`;
                boxTag = boxTag + `<li> 매출액 : ${parseInt(box.salesAmt).toLocaleString()} 원</li>`;
                boxTag = boxTag + `<li> 순위 증감 : ${box.rankInten} </li>`;
                boxTag = boxTag + '</ul>';
                boxTag = boxTag + '</details>';
            }

            
            console.log(boxTag);

            document.querySelector('#boxdiv').innerHTML =boxTag;
        })

        .catch((err) => {
            console.log(err);
        })
        
    })

    
});