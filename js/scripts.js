$(document).ready(function(){
  $("#add-address").click(function(){
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });

  $("#add-phone").click(function() {
    $("#new-phones").append('<div class="new-phone">' +
                              '<div class="form-group">' +
                              '<label for="new-phone">Phone</label>' +
                              '<input type="text" class="form-control new-phone">' +
                              '</div>' +
                            '</div>');
  });

  $('form#new-contact').submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName,
                      lastName : inputtedLastName,
                      addresses : [],
                      phones:[] };

    $(".new-address").each(function(){
      var inputtedStreet= $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = {street: inputtedStreet, city: inputtedCity, state: inputtedState};
      newContact.addresses.push(newAddress);
    });

    $("input.new-phone").each(function() {
      alert("loop!");
      var inputtedPhone = $(this).val();
      var newPhone = {numbers: inputtedPhone};
      newContact.phones.push(newPhone);
    });

    $('ul.contact').append("<li><span class = 'contact'>" +
                            newContact.firstName + ' ' +
                            newContact.lastName +
                            "</span></li>" );

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-phone").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address){
        $("ul#addresses").append("<li>" + address.street + ", " +
                                  address.city + ", " +
                                  address.state + "</li>");
      })
      $("ul#phone-numbers").text("");

      newContact.phones.forEach(function(phone) {
        $("ul#phone-numbers").append("<li>" + phone.numbers + "</li>");
      });
    });
  });
});

