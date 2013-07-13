
console.log('*** This is grandma\'s hack. ***');

if (jQuery('h1')) {
    console.log('jQuery("h1").text() -> ' + jQuery('h1').text());
    console.log('document.getElementsByTagName("h1")[0].innerText -> ' + document.getElementsByTagName('h1')[0].innerText);
    jQuery('h1').text('You are such a dick.');
}

if ($('h2')) $('h2').text('trololo');
if ($('h3')) $('h3').text('fooka');

//jQuery('form').submit()
