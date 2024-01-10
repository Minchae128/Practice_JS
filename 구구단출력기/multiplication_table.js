let one_btn = document.getElementById("one_btn");
let two_btn = document.getElementById("two_btn");
let resultDiv = document.getElementById("result"); // 결과를 표시할 div에 대한 참조
let reset_btn = document.getElementById("reset_btn");

one_btn.onclick = () => {
    let num1 = prompt("출력할 구구단 숫자 입력");
    let check1 = prompt("출력할 구문 선택 (1 = for문 / 2 = while문 / 3 = do-while)");
    let i = 1;

    // 결과를 표시할 영역 초기화
    resultDiv.innerHTML = "";

    if (check1 == 1) {
        // for문
        resultDiv.innerHTML += "for문을 이용한 출력" + "<br>";
        for (i = 1; i < 10; i++) {
            resultDiv.innerHTML += num1 + " * " + i + " = " + (num1 * i) + "<br>";
        }
        i = 1;
    }

    if (check1 == 2) {
        // while문
        resultDiv.innerHTML += "while문을 이용한 출력" + "<br>";
        while (i < 10) {
            resultDiv.innerHTML += num1 + " * " + i + " = " + (num1 * i) + "<br>";
            i++;
        }
        i = 1;
    }

    if (check1 == 3) {
        // do-while문
        resultDiv.innerHTML += "do-while문을 이용한 출력" + "<br>";
        do {
            resultDiv.innerHTML += num1 + " * " + i + " = " + (num1 * i) + "<br>";
            i++;
        } while (i < 10);
        i = 1;
    }
}


two_btn.onclick=()=>{
    let num2 = prompt("출력할 구구단 입력");
    let num3 = prompt("출력할 구구단 숫자 입력");
 

    resultDiv.innerHTML += "구구단 출력" + "<br>";
    resultDiv.innerHTML += num2 + " * " + num3 + " = " + (num2 * num3) + "<br>";

}

reset_btn.onclick=()=>{
    let check=confirm("초기화 하시겠습니까?");
    if(check==true)
    {
        location.reload();  // 페이지 새로 고침
    }
}