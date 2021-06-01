$(document).ready(function(){
    
    
    $(function() {
         $('.hero-text').animatedHeadline({
            animationType: 'clip'
        });
    });
    
    var mixer = mixitup('.portfolio-grid-container');

    // scrollify
      $(function() {
          	$.scrollify({
            	section : ".scrollify",
         	});
       });
    
});		

function openNav(){
    document.getElementById('menu').style.width = '100%';
}

function closeNav(){
    document.getElementById('menu').style.width = '0';
}