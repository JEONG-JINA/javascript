## 📍 DOM
: Document Object Model<br>
➡️ 자바스크립트가 HTML에 대한 정보들(id, class, name, style, innerHTML 등)을 object 자료로 정리한 것

<br>

### 브라우저는 HTML 문서를 위에서부터 차례대로 읽으며 DOM을 생성한다❗️
➡️ script 파일을 HTML 앞(상단)에 불러오면 에러 발생 가능

<br>

## 📍 DOMContentLoaded
: HTML을 다 읽고 실행

    document.addEventListener('DOMContentLoaded', function() {});   // 자바스크립트
    
    $(document).ready(function() {});   // 제이쿼리
    
<br>

## 📍 load
: DOM 뿐만 아니라 이미지, css, js 파일이 로드됐는지 체크

    window.addEventListener('load', function() {});   // 자바스크립트
    
    $(window).on('load', function() {});   // 제이쿼리
    
<br>

### load를 사용하면 페이지가 로드되는데 시간이 오래 걸린다❗️
➡️ DOMContentLoaded / ready 사용
