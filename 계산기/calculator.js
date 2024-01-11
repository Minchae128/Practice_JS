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
    buttons.forEach(button => { // 모든 버튼에 대해 반복하는 forEach루프 'buttons'는 HTML문서에 선택한 계산기 버튼들의 NodeList
        button.addEventListener('click', function (){ // 각 버튼에 클릭 이벤트 리스너 추가 즉, 버튼이 클릭되었을때 실행할 함수 등록
            const buttonValue = this.textContent; // 클릭된 버튼의 텍스트 내용을 가져와서 'buttonValue'변수에 저장. this는 클릭된 버튼임

            if (button.dataset.type === 'ac') { // 클릭된 버튼의 속성이 'ac'일때, clearCalculator함수 호출
                clearCalculator();
              } else if (button.dataset.type === 'operator') { // 클릭된 버튼의 속성이 'operator'일때, handleOperator함수 호출 / 이 함수는 현재 입력값과 연산자 관리
                handleOperator(buttonValue);
              } else if (button.dataset.type === 'result') { // 클릭된 버튼의 속성이 'result'일때, calculateResult함수 호출 / 이 함수는 계산을 수행하고 결과를 업데이트 함
                calculateResult();
              } else { // 위 조건들이 해당하지 않으면, 숫자 버튼이 클릭되었을 경우 'appendNumber'함수를 호출하여 현재 입력값에 숙자를 추가함.
                appendNumber(buttonValue);
              }
        
              updateDisplay(); // 각 버튼 클릭 후에는 화면을 업데이트하기 위해 'updateDisplay' 함수를 호출합니다. 이 함수는 현재 입력 값을 화면에 표시함.
            });


  // 나머지 함수들

  // 입력값을 초기화 해주는 함수
  function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operator = '';
  } 

  // 입력값 유무를 확인해주는 함수
  function handleOperator(value) {
    if (currentInput !== '') { // 현재 입력값이 비어있지 않다면
      previousInput = currentInput; // 현재 입력 값을 이전 입력값으로 옮기고
      currentInput = ''; // 현재 입력 값 초기화
      operator = value; // 선택된 연산자 설정
      // value는 연산자(+, -, *, /)
    } else if (previousInput !== '') { // 현재 입력 값이 비어있고, 이전 입력값이 존재한다면
      operator = value; // 선택된 연산자만 업데이트
    }
  }

// 등호(=) 버튼이 클릭되었을 때 호출되는 함수
function calculateResult() {
    // 현재 입력 값이 있고, 이전 입력 값과 선택된 연산자가 모두 존재하는 경우에만 계산 수행
    if (currentInput !== '' && previousInput !== '' && operator !== '') {
      // 이전 입력 값과 현재 입력 값, 선택된 연산자를 이용하여 계산을 수행
      const result = performCalculation(
        parseFloat(previousInput),
        parseFloat(currentInput),
        operator
      );
  
      // 계산 결과를 문자열로 변환하여 현재 입력 값에 저장
      currentInput = result.toString();
  
      // 이전 입력 값과 선택된 연산자를 초기화하여 다음 계산을 위해 준비
      previousInput = '';
      operator = '';
    }
  }  

// 숫자 버튼이 클릭되었을 때 호출되는 함수
function appendNumber(value) {
    // 현재 입력 값에 클릭된 숫자를 추가
    currentInput += value;
  }
  
// 두 숫자와 연산자를 이용하여 계산을 수행하고 결과를 반환하는 함수
function performCalculation(num1, num2, op) {
    // switch 문을 사용하여 연산자에 따라 다른 계산을 수행
    switch (op) {
      case '+':
        return num1 + num2; // 덧셈
      case '-':
        return num1 - num2; // 뺄셈
      case 'x':
        return num1 * num2; // 곱셈
      case '/':
        return num1 / num2; // 나눗셈
      default:
        return num2; // 연산자가 없거나 유효하지 않으면 두 번째 숫자 반환
    }
  }  

});
})