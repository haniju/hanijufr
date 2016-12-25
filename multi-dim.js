$('.container').hover(function() {
        $(this).find('.resultat').hide();
        $(this).find('.code').show();
    }, function() {
        $(this).find('.code').hide();
        $(this).find('.resultat').show();
});

<!--script>
var width;
width = getComputedStyle("title").width; //returns value in px

var height;
height = getComputedStyle("title").height; //returns value in px

var title_code=document.getElementById("title_code");
title_code.style.height = height;
title_code.style.width = width;

</script-->
