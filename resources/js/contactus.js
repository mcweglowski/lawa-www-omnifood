function submitToAPI(e) {

    document.getElementById("email-success").style.display = "none";
    document.getElementById("email-error").style.display = "none";
    document.getElementById("name-input").style.borderColor = "#CCCCC";
    document.getElementById("name-input-empty").style.display = "none";
    document.getElementById("email-input").style.borderColor = "#CCCCC";
    document.getElementById("email-input-empty").style.display = "none";
    document.getElementById("description-input").style.borderColor = "#CCCCC";
    document.getElementById("description-input-empty").style.display = "none";


    e.preventDefault();
    var URL = "https://ymyzm6gw71.execute-api.eu-west-1.amazonaws.com/LawaProd/contact-us";

    var valid = true;

    var Namere = /[A-Za-z]{1}[A-Za-z]/;
         
    if (!Namere.test($("#name-input").val())) {
      document.getElementById("name-input").style.borderColor = "red";
      document.getElementById("name-input-empty").style.display = "block";
      valid = false;
    }
    
    if ($("#email-input").val()=="") {
      document.getElementById("email-input").style.borderColor = "red";
      document.getElementById("email-input-empty").style.display = "block";
      valid = false;
    }
         
    if ($("#description-input").val()=="") {
      document.getElementById("description-input").style.borderColor = "red";
      document.getElementById("description-input-empty").style.display = "block";
      valid = false;
    }

    if (false == valid) {
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
        document.getElementById("contact-form").reset();        
        document.getElementById("email-success").style.display = "block";
      },
      error: function () {
        document.getElementById("email-error").style.display = "block";
      }
    });
}