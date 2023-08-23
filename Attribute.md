## 📍 getAttribute()
: 특정 요소의 속성 이름에 대한 값을 반환

    <input id="txtInput" name="content" data-value="hello">

    document.getElementById('txtInput').getAttribute('id');   // txtInput
    document.getElementById('txtInput').getAttribute('name');   // content
    document.getElementById('txtInput').getAttribute('data-value');   // hello


    [jQuery]
    $('#txtInput').attr('id');   // txtInput
    $('#txtInput').attr('name');   // content
    $('#txtInput').attr('data-value');   // hello

<br>

## 📍 getAttributeNames()
: 특정 요소의 속성 이름을 배열로 반환 (존재하지 않으면 빈 배열 반환)

    <input id="txtInput" name="content" data-value="hello">

    document.getElementById('txtInput').getAttributeNames();   // ["id", "name", "data-value"]

<br>

## 📍 setAttribute()
: 특정 요소의 속성 값을 변경, 추가

    <img class="image" src="" alt="이미지 없음">
    
    document.querySelector('image').setAttribute('src', '/contents/img/cont1.jpg');
    // <img class="image" src="/content/img/cont1.jpg" alt="이미지 없음">

    document.querySelector('image').setAttribute('alt', 'cont1 이미지');
    // <img class="image" src="/content/img/cont1.jpg" alt="cont1 이미지">


    [jQuery]
    $('.image').attr('src', '/content/img/cont1.jpg');
    // <img class="image" src="/content/img/cont1.jpg" alt="이미지 없음">

    $('.image').attr('alt', 'cont1 이미지');
    // <img class="image" src="/content/img/cont1.jpg" alt="cont1 이미지">
