let img=document.getElementById("img");
let scissors=document.getElementById("scissors");
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let score=document.getElementById("score");
let user_score=document.getElementById("user_score");
let computer_score=document.getElementById("computer_score");
let reset_btn = document.getElementById("reset_btn");
let end_btn = document.getElementById("end_btn");

//document.getElementById는 DOM(Document object Model)에서
//특정 ID를 가진 HTML 앨리먼트를 찾아서 반환하는 메서드
//즉, HTML엘리먼트를 javascript참조하고자 할때 사용
//예를들어, 이미지 엘리먼트의 속성을 변경하거나 버튼 클릭 이벤트를 추가등의 작업을 할때 할당된 변수 활용
//엘리먼트 = HTML문서의 각각의 구성요소를 가리키는 용어

//이미지 경로를 저장하는 배열
let imgArray= new Array();
imgArray[0]="C:/Users/shinpardon/IdeaProjects/Practice_JS/Practice_JS/가위-바위-보_게임/img/paper.jpg";
imgArray[1]="C:/Users/shinpardon/IdeaProjects/Practice_JS/Practice_JS/가위-바위-보_게임/img/rock.jpg";
imgArray[2]="C:/Users/shinpardon/IdeaProjects/Practice_JS/Practice_JS/가위-바위-보_게임/img/scissors.jpg";


let a;
let userscore=0;  // 사용자 점수 초기화
let computerscore=0; // 컴퓨터 점수 초기화

//이미지를 무작위로 변경하는 함수
function imagetime()
{
    a = Math.floor(Math.random()*3); // 0, 1, 2 중 하나의 무작위 정수 생성
    img.src=imgArray[a]; // 무작위로 선택된 이미지 경로는 img 엘리먼트의 src 속성에 할당
    
    //console.log(a); -> 선택된 이미지의 인덱스를 콘솔에 출력
}

setInterval(imagetime,150); //imagetime함수를 150밀리초 간격으로 반복 실행하는 코드

//imagetime이라는 함수 정의를 하고, 이 함수를 150밀리초마다 실행
//setInterval함수 사용



//가위를 클릭한 경우 
scissors.onclick = ()=>{
    clearInterval(); //이미지 변경 멈춤
    //승리하는 경우(컴퓨터 : 보를 낸 경우 )
    if(a==0)
    {
        alert("승리");
        userscore++;
        user_score.textContent=userscore; // 사용자 점수 업데이트
        // textContent 텍스트 콘텐츠를 가져옴
    }
    else if(a==2) //(컴퓨터 : 가위 낸 경우)
    {
        alert("비겼습니다.");
    }
    else//(컴퓨터 : 묵 낸 경우)
    {
        alert("패배");
        computerscore++;
        computer_score.textContent=computerscore;  // 사용자 점수 업데이트      
    }
    
}

//바위를 클릭한 경우
rock.onclick= () =>{
    clearInterval(); //이미지 변경 멈춤
    if(a==0)// (컴퓨터 : 보를 낸 경우)
    {
        alert("패배");
        computerscore++;
        computer_score.textContent=computerscore;  // 사용자 점수 업데이트
    }
    else if(a==2) //(컴퓨터 : 가위낸 경우)
    {
        alert("이겼습니다.");
        userscore++;
        user_score.textContent=userscore; // 사용자 점수 업데이트
    }
    else //(컴퓨터 : 묵 낸경우)
    {
        alert("비겼습니다.");
    }
}
//보를 클릭한 경우
paper.onclick=()=>{
    clearInterval(); //이미지 변경 멈춤
    if(a==0)// (컴퓨터 : 보를 낸 경우)
    {
        alert("비겼습니다");
    }
    else if(a==2) //(컴퓨터 : 가위낸 경우)
    {
        alert("패배.");
        computerscore++;
        computer_score.textContent=computerscore;  // 사용자 점수 업데이트
    }
    else //(컴퓨터 : 묵 낸경우)
    {
        alert("이겼습니다.");
        userscore++;
        user_score.textContent=userscore; // 사용자 점수 업데이트
    }
}

//다시 시작하기 클릭한 경우
reset_btn.onclick=()=>{
    let check=confirm("다시 시작하시겠습니까?");
    if(check==true)
    {
        location.reload();  // 페이지 새로 고침
    }
}

//게임종료 클릭한 경우
end_btn.onclick=()=>{
    let check=confirm("게임을 종료하시겠습니까?");
    if(check==true)
    {
        alert("게임 승리 : " + userscore  + " 게임 패배 : " + computerscore);
        location.reload(); // 페이지 새로 고침
    }
}