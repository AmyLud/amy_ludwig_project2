$(document).ready(function () {
     var $text = $("imput[type=text]"),
          $submit = $("button"),
          $listComment = $(".blog__comments"),
          _data;

     $($submit).click(function () {
               _data = $text.html();
               $.ajax({
                    type: "POST",
                    url: window.local,
                    data: _data,
                    cache: false,
                    success: function (html) {
                         $listComment.prepend("<div>" + _data + "</div>");
                         $text.html("");
                    }
               });
            
     });
});