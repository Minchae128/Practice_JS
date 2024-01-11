// DOMContentLoaded 이벤트에 대한 이벤트 리스너를 추가하는 코드 (DOMContentLoaded는 이벤트이고, addEventListener는 이벤트 리스너를 추가하는 메서드)
// 여기서 'DOMContentLoaded' 이벤트는 HTML문서의 모든 내용이 로드되고 DOM이 완전히 구성된 후에 발생하는 이벤트
// 즉, HTML문서가완전히 로드되고 초기호 되었을때 실행할 함수 지정하는 것.

// 코드 실행 순서
// 1. HTML 문서의 모든 요소가 로드되고 초기화됨 (DOMContentLoaded 이벤트 발생)
// 2. DOMContentLoaded 이벤트에 등록된 콜백 함수가 실행됨.
// 3. 콜백 함수 내부에서 변수 선언, 이벤트 리스너 등이 초기화됨.

document.addEventListener('DOMContentLoaded', function () { 
    
    //변수 선언
    const displayInput = document.querySelector('.input');
    const buttons = document.querySelectorAll('.numBtn, .operator, .result, .ac');
    let cuttentInput = '';
    let previousInput = '';
    let operator = '';


    //이벤트 리스너 추가
    buttons.forEach(button => {
        button.addEventListener('click', function (){
            const buttonValue = this.textContent;

            if (button.dataset.type === 'ac') {
                clearCalculator();
              } else if (button.dataset.type === 'operator') {
                handleOperator(buttonValue);
              } else if (button.dataset.type === 'result') {
                calculateResult();
              } else {
                appendNumber(buttonValue);
              }
        
              updateDisplay();
            });
          });
})