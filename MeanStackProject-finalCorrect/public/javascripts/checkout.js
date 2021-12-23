Stripe.setPublishableKey('pk_test_51IFiVlKtV6OsZlGkxgKAfrIUk4XsT5VjDj6Z097HBjVFrZjnTlfc9zaD20uEYULYFdw53IpfTW26nIY0SoEj06S000CiXutCNV');
var $form= $('#payment-form');
$form.submit(function(event) {
    $('#payment-errors').removeClass('hidden');

$form.find('button').prop('disabled',true);

    Stripe.card.createToken({
    number: $('#card-number').val(),
    cvc: $('#card-cvc').val(),
    exp_month: $('#card-expiry-month').val(),
    exp_year: $('#card-expiry-year').val(),
    name: $('#card-name').val()
  },StripeResponseHandler);    // Handle result.error or result.token
 return false;
});

function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!// Show the errors on the form
      
      $('#payment-errors').text(response.error.message);
      $('#payment-errors').removeClass('hidden');
      $form.find('button').prop('disabled', false); // Re-enable submission
  
    } else { // Token was created!
  
      // Get the token ID:
      var token = response.id;
  
      // Insert the token into the form so it gets submitted to the server:
      $form.append($('<input type="hidden" name="stripeToken" />').val("token"));
  
      // Submit the form:
      $form.get(0).submit();
  
    }
  }