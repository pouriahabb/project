
$(document).ready(function() {
   $('#save').click(function(){
      var name = $("#defaultContactFormName").val();
      var lastname = $("#defaultContactFormLastName").val();
      var email = $("#defaultContactFormEmail").val();

      $('.table tbody').append("<tr><td>"+ name +"</td><td>"+ lastname +"</td><td>"+ email +"</td></tr>");

      alert("Added " + name);
   });   
});