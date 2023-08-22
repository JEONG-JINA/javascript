## 📍 getAttribute
: 특정 요소의 속성 이름에 대한 값을 반환

    <input id="txtInput" name="content" data-value="hello">

    document.getElementById('txtInput').getAttribute('id');   // txtInput
    document.getElementById('txtInput').getAttribute('name');   // content
    document.getElementById('txtInput').getAttribute('data-value');   // hello
