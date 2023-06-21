## 📍setInterval()
: 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용
➡️ 첫번째 인자 : 실행할 코드를 담고 있는 함수, 두번째 인자 : 반복 주기 ( ms(밀리초) 단위 사용) 

    function test(string) {
        console.log(string);
    }
    
    setInterval(function() {
        test('Hello!');
    }, 3000);

### clearInterval()
: 코드가 주기적으로 실행되는 것을 중단

    const intervalId = setInterval(() => console.log(new Date()), 2000);
    Sun Dec 12 2021 12:45:31 GMT-0500 (Eastern Standard Time)
    Sun Dec 12 2021 12:45:33 GMT-0500 (Eastern Standard Time)
    Sun Dec 12 2021 12:45:35 GMT-0500 (Eastern Standard Time)
    clearInterval(intervalId);

<br>

## 📍setTimeout()
: 코드를 바로 실행하지 않고 일정 시간 기다린 후 실행하고 싶을 때 사용
➡️ 첫번째 인자 : 실행할 코드를 담고 있는 함수, 두번째 인자 : 반복 주기 ( ms(밀리초) 단위 사용) 
