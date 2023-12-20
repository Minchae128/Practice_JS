# Practice_JS

## Web에서 JS의 역할
1. HTML = 뼈대 (마크업)
2. CSS = 스킨 (마크업)
3. Javascript = 신경계 (논리 설계 가능)

## 기초 문법
```
1. 변수 : 상자안에 값을 담는 개념
- var : 변수 변화에 유동적 (ex) 정의 a = 1 결과값 1 / 정의 a = 2 결과 값 2) 
- let : 변수를 만들때 사용하는 일반적인 방법
- const : 유일한 변수 값을 지정할 때 사용
```

```
2. 함수
- 들어오는 값 -> 함수 -> 결과
ex) 사용 방법
    정의 :     function myFunction(x) {
                 let temp = 2*x +3;
                 return temp;
                }
    실행 :      myfunction(1)
    결과값 :    5

    정의 :     function add(x,y) {
                 let temp = x + y;
                 return temp;
                }
    실행 :      add(1,2)
    결과값 :    3

특징 : 입력, 출력 없을 수 있음
ex) 정의 :      function fly() {
                  openWings();
                    while (true) {
                      moveWings();
                     }
                }

    실행 :      fly()
    -> 코드를 묶어주기 위해서 사용하기도 함

    함수 = 마법 = 코드 묶음
```

```
3. 조건문
if(money > 5000) {
  rideTaxi();   (참일때의 조건)
} else {
  walk();    (거짓일때의 조건)
}

조건문 확장
if(money > 5000) {
  rideTaxi();   (참일때의 조건)
} else if(money > 2000) {
  rideBus();    (거짓일때 그다음 조건의 참일때)
}else{
  walk();  (조건들이 다 거짓일때)
}
```

```
4. 반복문
```

*console.log();  = 메시지 출력