</div>
<script type="text/javascript" src="js/jquery-2.2.0.min.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
<script type="text/javascript" src="plugins/animsition-master/js/animsition.min.js" ></script>
<script type="text/javascript" src="js/functions.js" ></script>
<script>
$(function() {
  return $(".carousel.lazy").on("slide", function(ev) {
    var lazy;
    lazy = $(ev.relatedTarget).find("img[data-src]");
    lazy.attr("src", lazy.data('src'));
    lazy.removeAttr("data-src");
  });
});
</script>

<div id="moveProjectContent" >

</div>

</body></html>