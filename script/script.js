$(function () {

    /* location 객체를 이용한 페이지 이동*/
    $("#moveDaum").click(function () {
        location.href = "https://www.Daum.net";
        //        location.href = "이동할 파일 또는 인터넷 URL 주소";
    })
    /* location 객체를 이용한 페이지 이동*/

    /* location 객체를 이용한 새로고침*/
    $("#reload").click(function () {
        location.reload();

    });
    /* location 객체를 이용한 페이지 새로고침(= 기능키 F5와 동일)*/

    /* history 객체를 이용한 페이지 뒤로가기*/
    $("#back").click(function () {
        history.back();
    });
    /* history 객체를 이용한 페이지 뒤로가기*/

    /* history 객체를 이용한 앞페이지로 이동*/
    $("#Go").click(function () {
        history.forward();  //  history.go(1); 과 동일 기능
    });
    /* history 객체를 이용한 앞페이지로 이동*/






    var slideGo = setInterval(fnslide, 3000);


    $("#start").click(function () {
        slideGo = setInterval(fnslide, 3000);
    });


    $("#stop").click(function () {
        //    clearInterval => setInterval 중지
        clearInterval(slideGo);
    });


    //소스 반복



    function fnslide() {
        //
        $("#slideShuttleFrame").animate({
                "margin-left": "-1000px"
            },
            1000,
            "swing", // 기본값 = swing
            function () {
                $("#slideShuttleFrame>a:first-child").insertAfter("#slideShuttleFrame>a:last-child");
                $("#slideShuttleFrame").css({
                    "margin-left": "0px"
                });
            });
    }
});
