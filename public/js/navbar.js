$(document).ready(function() {

  var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight();
    
    if (scrollElement.scrollTop() > 0){
        affixElement.addClass("nav-shrinked");
        affixElement.removeClass("nav-expanded");
        document.getElementById("wrapper").style.paddingTop = height;
        document.getElementById("wrapper").classList.remove("wrapper-expanded");
        document.getElementById("wrapper").classList.add("wrapper-shrinked");
    }
    else {
        affixElement.removeClass("nav-shrinked");
        affixElement.addClass("nav-expanded");
        document.getElementById("wrapper").style.paddingTop = 104;
        document.getElementById("wrapper").classList.remove("wrapper-shrinked");
        document.getElementById("wrapper").classList.add("wrapper-expanded");
        
    }
      
  };
  

  $('[data-toggle="nav-shrinked"]').each(function() {
    var ele = $(this),
        //wrapper = $('<div id="wrapper" class="wrapper-expanded"></div>');
        wrapper = document.getElementById('wrapper');
    
    //ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this),wrapper);
    });

    
    
    // init
    toggleAffix(ele, $(window),wrapper);
  });
  
});