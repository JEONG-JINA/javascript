tabList.forEach((list, listInx) => {
    list.addEventListener('click', (e) => {
        const tabClass = e.target.getAttribute('class');  // dfssfsdf

        document.querySelector('.tabList li.on').classList.remove('on');
        e.target.classList.add('on');

        tabConts.forEach((cont, contInx), () => {
            if (cont.classList.contains(tabClass)) {
                cont.style.display = 'block';
            } else {
                cont.style.display = 'none';
            }
        });
    });
});


tabList.forEach((list, listInx) => {
    list.addEventListener('click', (e) => {
        document.querySelector('.tabList li.on').classList.remove('on');
        e.target.classList.add('on');

        tabConts.forEach((cont, contInx) => {
            cont.classList.toggle('on', contInx === listInx);
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
