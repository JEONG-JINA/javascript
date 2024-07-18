## 📍 innerHTML
* 요소 노드 **내부**의 HTML 코드를 문자열로 리턴 (내부에 있는 줄 바꿈이나 들여쓰기 포함)
* 새로운 값을 할당하면 내부의 값을 새로운 값으로 교체
* 내부의 HTML 자체를 수정할 때 자주 활용

      const list = document.querySelector('.list');

      list.innerHTML += '<li>New list</li>'  // 기존 태그를 유지한 채, 새로운 태그 추가
      list.innerHTML = '<li>New list</li>'   // 기존 태그는 없어지고, 새로운 태그로 교체

<br>

## 📍 outerHTML
* 요소 노드 **자체**의 전체적인 HTML 코드를 문자열로 리턴 (내부에 있는 줄 바꿈이나 들여쓰기 포함)
* 새로운 값을 할당할 경우 요소 자체가 교체

      list.outerHTML = '<ul class="new-list"><li>New list</li></ul>'   // 기존 요소는 없어지고, 새로운 요소로 교체

<br>

## 📍 textContent
* 요소 안의 내용들 중에서 **HTML 태그 부분은 제외하고 텍스트만** 리턴 (내부에 있는 줄 바꿈이나 들여쓰기 포함)
* 새로운 값을 할당하면 내부의 값을 새로운 값으로 교체
* 텍스트만 다루기 때문에, 특수문자도 그냥 텍스트로 처리

      list.textContent = 'New text';   // <ul class="list">New text</ul>
      list.textContent = '<li>New text</li>';   // <li>New text</li>가 HTML이 아닌 텍스트로 나옴
