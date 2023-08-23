## 📍 className
: class 전체가 변경됨 (추가하려는 class가 이미 있어도 중복 추가)

    element.className = '변경할 클래스명';

<br>

## 📍 classList
: class 하나만 조작 가능

* class 추가 (추가하려는 class가 이미 있다면 중복 추가 X)

      element.classList.add('추가할 클래스명');
      element.classList.add('추가할 클래스명1', '추가할 클래스명2', '추가할 클래스명3');  // 여러개 가능

* class 제거

      element.classList.remove('제거할 클래스명');
      element.classList.remove('제거할 클래스명1', '제거할 클래스명2', '제거할 클래스명3');  // 여러개 가능

* class 토글

      element.classList.toggle('토글 클래스명');

* class 존재 확인
      element.classList.contains('확인할 클래스명');  // 존재하면 true, 존재하지 않으면 false 반환

* class 교체

      element.classList.replace('교체할 클래스명', '변경 클래스명');
