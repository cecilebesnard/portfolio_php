	
function openNav() {
    $("#mySidenav").css({
        width : "250px"});
    $('main').css('opacity' , '0.5');
};

function closeNav() {
    $("#mySidenav").css({
        width : "0"});
    $('main').css('opacity' , '1');
};



$(function(){
        //$("#ticker01").liScroll({travelocity: 0.13});
		$('.parallax').parallax();

		$('#mainTitle').fadeIn(3000);
		$('#name').fadeIn(5000);

		$('.carousel').carousel();

		initialize();

		$('#apres').click(function()
		{
			OnClickNext();
		});

		$('#avant').click(function()
		{
			OnClickPrevious();
		});

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
                    var the_id = $(this).attr("href");

                    $('html, body').animate({
                        scrollTop:$(the_id).offset().top
                    }, 'slow');
                });
                
                

		
	  
 });

$(function(){
   $().timelinr();

   
});

	




$(window).scroll(
               function() 
       { 
           if($(document).scrollTop() > 10)
           {
           $('#retour').fadeIn('slow'); 
           }
           if($(document).scrollTop() < 10)
           {
           $('#retour').fadeOut('slow'); 
           }
           
           });

$('#retour').click(
        function()
{
    $('html').animate({
        scrollTop: 0
    }, 500);
    
});




