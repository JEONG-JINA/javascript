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
