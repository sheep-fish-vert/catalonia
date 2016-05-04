function tabsNewPage(){
    $('.menu-newP>ul>li').click(function () {
        $(this).toggleClass('active');
        if( $(this).hasClass('active')){
            $(this).find('ul').slideDown(300);
        }else{
            $(this).find('ul').slideUp(300);
        }

    });
}
$(document).ready(function(){
    tabsNewPage();
})