$(document).ready(function() {
	console.log("pozvao");
	$('#logo').animate({'opacity': '0'},100);
	$('#logo').animate({'opacity': '1'},3000)
	$('#myNavbar').animate({'opacity':'0'}, 100);
	$('#myNavbar').animate({'opacity':'1'}, 3000);
	$('#velicinaSlova1').animate({'opacity':'1'}, 3000);
	$('#velicinaSlova2').animate({'opacity':'1'}, 4500);

	$(window).scroll( function(){
	    $('#gly1').each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.1 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 2000);       
	        } 
	    });

	    $('#gly3').each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.1 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 2000);       
	        } 
	    });

	    $('#gly4').each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.1 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 2000);       
	        } 
	    });

	    $('#podnaslov1').each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.1 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 2000);       
	        } 
	    });

	    $('#podnaslov2').each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.1 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 2000);       
	        } 
	    });

	    $('#podnaslov3').each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.1 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 2000);       
	        } 
	    });
	    
	});
});