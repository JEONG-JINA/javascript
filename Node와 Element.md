## 📍 Node
* 계층 구조 중 가장 상위의 개념
* element, text, comment 등 여러 항목 포함

#### 부모/형제/자식 찾기
* parentNode : 부모 노드를 찾는다.
* childNodes : 자식 노드 목록을 **NodeList** 형태로 찾는다. (li 태그 안에 p태그가 3개 있다면 모든 p태그를 찾는다.)
* firstChild : 첫번째 자식 노드를 찾는다.
* lastChild : 마지막 자식 노드를 찾는다.
* previousSibling : 형제 노드 중, 이전 노드를 찾는다.
* nextSibling : 형제 노드 중, 다음 노드를 찾는다.
* contains() : 노드의 자손인지 아닌지에 대해 boolean 값으로 반환
* hasChildNodes() : 자식 노드가 있는지 없는지에 대해 boolean 값으로 반환

<br>

## 📍 Element
* 노드의 한 종류
* ``<ul></ul>``, ``<div></div>`` 등 태그를 사용한 요소

#### 부모/형제/자식 찾기
* parentElement : 부모 요소를 찾는다.
* children : 자식 요소 목록을 **HTMLCollection** 형태로 찾는다.
* firstElementChild : 첫번째 자식 요소를 찾는다.
* lastElementChild : 마지막 자식 요소를 찾는다.
* previousElementSibling : 형제 요소 중, 이전 요소를 찾는다.
* nextElementSibling : 형제 요소 중, 다음 요소를 찾는다.

<br>

    💡 태그를 찾으려면 element, 태그 내 text를 찾으려면 node 사용
