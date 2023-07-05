## 📍setInterval()
: 지정 시간으로 반복해서 코드 실행<br>
➡️ 첫번째 인자 : 실행할 코드를 담고 있는 함수, 두번째 인자 : 반복 주기 ( ms(밀리초) 단위 사용) 

### clearInterval()
: 코드가 주기적으로 실행되는 것을 중단

    // 2초 간격으로 alert 띄움
    const timer = setInterval(function() {
        alert('on');
    }, 2000);  // = setInterval(() => alert('on'), 2000);
    
    // 함수 호출 중단
    clearInterval(timer);

<br>

## 📍setTimeout()
: 지정 시간이 지난 후, 코드 1회 실행<br>
➡️ 첫번째 인자 : 실행할 코드를 담고 있는 함수, 두번째 인자 : 반복 주기 ( ms(밀리초) 단위 사용)

### cleartimeout()
: setTimeout 함수 취소

    // 5초 후에 정지
    setTimeout(function() {
        clearInterval(timer);
        alert('stop');
    }, 5000);  // = setTimeout(() => clearInterval(timer); alert('stop');, 5000);

###

    function info(name, age) {
        console.log('이름은' + name + '입니다.');
        console.log('나이는' + age + '살 입니다.');
    }
    
    const sayInfo = setTimeout(info, 1000, 'Jinny', '20');  // 이름은 Jinny 입니다. 나이는 20살 입니다.

    clearTimeout(sayInfo);  // clearTimeout으로 취소해서 [이름은 Jinny 입니다. 나이는 20살 입니다.] 가 보이지 않음.
