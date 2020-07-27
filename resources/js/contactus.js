function submitToAPI(e) {

    e.preventDefault();
    var URL = "https://ymyzm6gw71.execute-api.eu-west-1.amazonaws.com/LawaProd/contact-us";

    var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#name-input").val())) {
                      alert ("Name can not less than 2 char");
             return;
         }
         if ($("#email-input").val()=="") {
             alert ("Please enter your email id");
             return;
         }

         var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!reeamil.test($("#email-input").val())) {
             alert ("Please enter valid email address");
             return;
         }

    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
       name : name,
       email : email,
       desc : desc
     };

    $.ajax({
      type: "POST",
      url : URL,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      success: function () {
        document.getElementById("email-success").style.display = "block";
      },
      error: function () {
        document.getElementById("email-error").style.display = "block";
      }
    });
}