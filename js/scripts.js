$(document).ready(function() {
  $("form").submit(function(event) {

    var word = $("#word").val()
    event.preventDefault();

    var a = word.split('')

    for (var i = 0; i < word.length; i++) {
      // if (a[i] == "a" || a[i] == "e" || a[i] == "i" ||a[i] == "o" ||a[i] == "u")
      // a[i] = "-"


     if (a[i] == "!" || a[i] == "?" ) {
       alert("please use letters only");
     } else if () {

     }




    }

  console.log(a)
   var newWord = a.join('')

   console.log(newWord);

  })


})
