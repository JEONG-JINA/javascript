tabList.forEach((list, listIdx) => {
    list.addEventListener('click', (e) => {
        const tabClass = e.target.getAttribute('class');  // dfssfsdf

        document.querySelector('.tabList li.on').classList.remove('on');
        e.target.classList.add('on');

        tabConts.forEach((cont, contIdx), () => {
            if (cont.classList.contains(tabClass)) {
                cont.style.display = 'block';
            } else {
                cont.style.display = 'none';
            }
        });
    });
});


tabList.forEach((list, listIdx) => {
    list.addEventListener('click', (e) => {
        document.querySelector('.tabList li.on').classList.remove('on');
        e.target.classList.add('on');

        tabConts.forEach((cont, contIdx) => {
            cont.classList.toggle('on', contIdx === listIdx);
        });
    });
});


tabBtn.forEach(function(item, index) {
    item.addEventListener('click', function() {
        tabBtn.forEach(function(tabItem, tabIndex) {
            tabItem.classList.toggle('on', tabIndex === index);
        });
    
        tabContent.forEach(function(tabConItem, tabConIndex) {
            tabConItem.classList.toggle('on', tabConIndex === index);
        });
    });
});
