## 1) 파일을 만들지 않고 콘솔을 이용해 바로 현재 페이지에서 javascript 코드 실행 가능
ex) 콘솔창에서 alert('Hello, World!'**.length**) 입력하면 경고창으로 **문자열의 길이(개수)** 출력

<br>

---

<br>

## 2) 숫자(Number) / 문자열(String)
1+1(숫자) == 2 / '1'+'1'(문자) == '11'

<br>

---

<br>

## 3) querySelector / getElementById

* ### querySelector
  - seletor의 구체적인 그룹과 일치하는 document인 **첫 번째** 엘리먼트 반환
  - 일치하는 값이 없다면 null 반환 
  - 처리속도 느림
  - 리턴값 : NodeList
  - NodeList : index 번호로 접근 가능
  - id, class, [data-**=""], input[name=""] 등 다양한 선택자 사용 가능
  - querySelector : 첫번째 값 하나만 가져온다. / querySelectorAll : 모두 가져온다.

        var test = document.querySelectorAll('.test')
        for (var i = 0; i < test.length; i++;) {
            test[i].addEventListener("mouseenter", function(){
                ~~
            });
        }**

* ### getElementById
  - id를 통해 엘리먼트 반환
  - 일치하는 값이 없다면 null 반환
  - 처리속도 빠름
  - 리턴값 : HTMLCollection
  - HTMLCollection : name, id, index 번호로 접근 가능
  - 그 외 **getElementsByClassName, getElementsByTagName**
