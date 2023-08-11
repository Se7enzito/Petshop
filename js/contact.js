// jQuery(document).ready(function ($) {
//     // if submit button is clicked
//     $('#submit').click(function () {
//         // Get the data from all the fields
//         var name = $('input[name=name]');
//         var email = $('input[name=email]');
//         var regx = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
//         var comment = $('textarea[name=comment]');
//         var newsletter = $('#newsletter').is(':checked') ? 'Yes' : 'No'; // Newsletter checkbox
//         var message = $('textarea[name=message]'); // New message textarea
//         var returnError = false;

//         // Simple validation to make sure user entered something
//         // Add your own error checking here with JS, but also do some error checking with PHP.
//         // If error found, add hightlight class to the text field
//         if (name.val() == '') {
//             name.addClass('error');
//             returnError = true;
//         } else name.removeClass('error');

//         if (email.val() == '') {
//             email.addClass('error');
//             returnError = true;
//         } else email.removeClass('error');

//         if (!regx.test(email.val())) {
//             email.addClass('error');
//             returnError = true;
//         } else email.removeClass('error');

//         if (comment.val() == '') {
//             comment.addClass('error');
//             returnError = true;
//         } else comment.removeClass('error');

//         // New validation for message textarea
//         if (message.val() == '') {
//             message.addClass('error');
//             returnError = true;
//         } else message.removeClass('error');

//         // Highlight all error fields, then quit.
//         if (returnError == true) {
//             return false;
//         }

//         // Organize the data
//         var data =
//             'name=' + name.val() +
//             '&email=' + email.val() +
//             '&comment=' + encodeURIComponent(comment.val()) +
//             '&newsletter=' + newsletter + // Add newsletter value
//             '&message=' + encodeURIComponent(message.val()); // Add message value

//         // Disabled all the text fields
//         $('.text').attr('disabled', 'true');

//         // Show the loading sign
//         $('.loading').show();

//         // Start the ajax
//         $.ajax({
//             // This is the php file that processes the data and sends email
//             url: "contact.php",
//             // GET method is used
//             type: "GET",
//             // Pass the data
//             data: data,
//             // Do not cache the page
//             cache: false,
//             // Success
//             success: function (html) {
//                 // If contact.php returned 1/true (send mail success)
//                 if (html == 1) {
//                     // Show the success message
//                     $('.done').fadeIn('slow');
//                     // Reset all input fields
//                     $(".form").find('input[type=text], input[type=email], textarea').val("");
//                     $('#newsletter').prop('checked', false); // Reset newsletter checkbox
//                     message.val(''); // Reset message textarea
//                 } else {
//                     alert('Sorry, unexpected error. Please try again later.');
//                 }
//             }
//         });

//         // Cancel the submit button default behavior
//         return false;
//     });
// });

$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        var newsletter = $('#newsletter').is(':checked') ? 'Yes' : 'No';

        $.ajax({
            type: 'POST',
            url: 'process_contact.php',
            data: {
                name: name,
                email: email,
                phone: phone,
                message: message,
                newsletter: newsletter
            },
            success: function (response) {
                $('.message').html(response).show();
                
                // Reset form fields
                $('#name').val('');
                $('#email').val('');
                $('#phone').val('');
                $('#message').val('');
                $('#newsletter').prop('checked', false);
            }
        });
    });
});