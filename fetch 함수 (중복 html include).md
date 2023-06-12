중복되는 요소 각각 html 파일로 생성 후 data-include에 경로 입력

    [index.html]
    
    <header class="component" data-include="/components/header.html"></header>
    <!-- header.html 파일에는 <header></header> 안에 들어가는 태그 입력 -->
    
    
   
    [component.js]
    
    const component = document.querySelectorAll('.component');

    component.forEach(function(el) {
        const include = el.getAttribute('data-include'); //여러 파일을 한번에 관리하기 위해 클래스명, data-include 경로 입력 후 불러오기

        fetch(include)
        .then(res => res.text())
        .then(data => {
            el.innerHTML = data;
            componentsScript(); //fetch로 불러온 파일 안에 요소는 js 적용이 안됨. 따로 함수 생성해서 같이 불러오기
        });
    });
    
    fucntion componentScript() {
        ...
    }
