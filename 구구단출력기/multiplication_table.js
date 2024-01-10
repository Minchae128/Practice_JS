let one_btn = document.getElementById("one_btn");
let two_btn = document.getElementById("two_btn");


reset_btn.onclick=()=>{
    let num = prompt("출력할 구구단 숫자 입력");
    let i = 1;

    //for문
    document.write("for문을 이용한 출력", "<br>");
    for(i = 1; i < 10; i++){
            document.write(num + " * " + i + " = " + (num * i) + "<br>");
    }

    i = 1;

    //while문
    document.write("while문을 이용한 출력", "<br>");
    while(i < 10){
        document.write(num + " * " + i + " = " + (num * i) + "<br>");
        i++;
    }
    
    //do-while문
    document.write("do-while문을 이용한 출력", "<br>");
    do{
        
    }
    while();
}


end_btn.onclick=()=>{
    let check=confirm("게임을 종료하시겠습니까?");
    if(check==true)
    {
        alert("게임 승리 : " + userscore  + " 게임 패배 : " + computerscore);
    }
}