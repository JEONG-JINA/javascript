## 📍 IntersectionObserver
: 브라우저 뷰포트(Viewport)와 설정한 요소(Element)의 교차점을 관찰<br>
요소가 뷰포트에 포함되는지 포함되지 않는지, 사용자 화면에 지금 보이는 요소인지 아닌지를 구별<br>
비동기적으로 실행, scroll 같은 이벤트 기반의 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출 같은 문제 없이 사용 가능

    // IntersectionObserver 생성자는 두 가지의 매개변수를 받음
    const observer = new IntersectionObserver(callback, options);

    const options = {threshold: [0.5]}  // 뷰포트 가시성
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 요소가 화면에 진입한 경우
            } else {
                // 요소가 화면에서 벗어난 경우
            }
        });
    }, options);

    // target 관찰 시작
    observer.observe(target);

<br>

## 📍 MutationObserver
: 타겟을 관찰하면서 해당 객체에 어떤 변경사항이 발생했을 때 지정된 콜백함수를 실행





https://velog.io/@longroadhome/%EB%AA%A8%EB%8D%98JS-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-Observers
<br>
https://www.heropy.dev/p/ydKoQO
<br>
https://velog.io/@khy226/intersection-observer%EB%9E%80-feat-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0
