function tabsNewPage(){
    $('.menu-newP>ul>li>p').click(function () {
        $(this).parent('li').toggleClass('active');
        if( $(this).parent('li').hasClass('active')){
            $(this).next().slideDown(300);
        }else{
            $(this).next().slideUp(300);
        }

    });
}
$(document).ready(function(){
    tabsNewPage();
})