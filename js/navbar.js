 function openNav() {
    $("#mySidenav").css({
        width : "250px"});
    $('#main').css('opacity' , '0.5');
};

function closeNav() {
    $("#mySidenav").css({
        width : "0"});
    $('#main').css('opacity' , '1');
};

 $(function(){
 
     $('.closebtn').click(function()
                {
                    closeNav();
                });
                
    $('.openNav').click(function()
                {
                    openNav();
                });

    $('.closenav').click(function()
                {
                    closeNav(); 
                    var encre = $(this).data("encre");    
                    var href = "index.php"+encre;
                    $(this).attr("href" , href );              
                });
 });
 
 
 

