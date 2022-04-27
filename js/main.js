$(document).ready(function() {

  const isBlank = (value) => {
    if (value.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  const validateName = () => {
    let name = $(".contactFormName").val();
    return isBlank(name);
  }

  const validateEmail = () => {
    let email = $(".contactFormEmail").val();
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegEx.test(email)) {
      return false;
    } else {
      return isBlank(email);
    }
  }

  const validateSubject = () => {
    let subject = $(".contactFormSubject").val();
    return isBlank(subject);
  }

  const validateMessage = () => {
    let message = $(".contactFormMessage").val();
    return isBlank(message);
  }

  const validateSum = () =>{
    let sum = $(".randomSum").val();
    return(sum == 6);
  }

  $(".contactFormButton").click(function() {
    let errors = [];
    $(".messageError").addClass("hidden");
    $(".messageSuccess").addClass("hidden");
    $("li").remove(".errorItem");
    if (!validateName()) {
      errors.push("Invalid Name");
    }
    if (!validateEmail()) {
      errors.push("Invalid Email");
    }
    if (!validateSubject()) {
      errors.push("Invalid Subject");
    }
    if (!validateMessage()) {
      errors.push("Invalid Message");
    }
    if (!validateSum()) {
      errors.push("Invalid Capcha code");
    }

    if(errors.length > 0)
    {
      for (var i = 0; i < errors.length; i++) {
        $(".errorList").append("<li class=\"errorItem\"> "+errors[i]+" </li>");
      }
      $(".messageError").removeClass("hidden");
    }
    else {
      $(".messageSuccess").removeClass("hidden");
    }
  });

});
