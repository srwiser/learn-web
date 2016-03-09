var main = function() {
    $('.btn').click(function() {
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text("140");
        $('.btn').addClass('disabled');
    });
    $('.status-box').keyup(function(){
        var postlength = $(this).val().length;
        var charactersleft = 140 - postlength;
        $('.counter').text(charactersleft);
        if(charactersleft < 0) {
            $('.btn').addClass('disabled');
        }
        else if(charactersleft === 140) {
            $('.btn').addClass('disabled');
        }
        else {
            $('.btn').removeClass('disabled');
        }
    });
    //prevent empty messages on page load
    $('.btn').addClass('disabled');
}
$(document).ready(main);