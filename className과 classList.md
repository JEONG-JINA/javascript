## 📍 className
: class 자체가 변경됨

    element.className = '변경할 클래스명';

<br>

## 📍 classList
: class 개별적으로 조작 가능

* class 추가 (추가하려는 class가 이미 있다면 중복 추가 X)

      element.classList.add('추가할 클래스명');
      element.classList.add('추가할 클래스명1', '추가할 클래스명2', '추가할 클래스명3');  // 여러개 가능

* class 제거

      element.classList.remove('제거할 클래스명');
      element.classList.remove('제거할 클래스명1', '제거할 클래스명2', '제거할 클래스명3');  // 여러개 가능

* class 토글 (class가 있으면 삭제, class가 없으면 추가)

      element.classList.toggle('토글 클래스명', option);  // option : true 또는 false 값을 가짐. 지정된 class 값이 있거나 없거나 true면 강제 추가, false면 강제 제거

  ###### ※<a href="https://github.com/JEONG-JINA/javascript/blob/main/%ED%83%AD%EB%A9%94%EB%89%B4.js">참고</a>

* class 존재 확인

      element.classList.contains('확인할 클래스명');  // 존재하면 true, 존재하지 않으면 false 반환

* class 교체

      element.classList.replace('교체할 클래스명', '변경 클래스명');
