(function(){
  //pass a template and some JSON data to Mustache.js
  var output = Mustache.render("<h1>{{name}}, {{city}}</h1>",{
      "name": "User0",
      "city": "NA"
  });

  //append the HTML that Mustache.js has created to the DOM
  $('#testingBox').append(output);
})();

(function(){
  var output = Mustache.render("<h1>Lorem ipsum {{dolor}} sit amiet.</h1>",{
    "dolor": "dolar"
  })
  $('header').append(output);
})();


var myData = [
  {
      "name": "Joe Smith",
      "phone": "(212) 555-1212",
      "accountNumber": "123456",
      "title": "East Coast Sales"
  },
  {
      "name": "Sue Frost",
      "phone": "(212) 555-3131",
      "accountNumber": "654321",
      "title": "West Coast Sales"
  },
  {
      "name": "Jim Murphy",
      "phone": "(212) 555-4545",
      "accountNumber": "987654",
      "title": "International Sales"
  }
];

$.each(myData,function(index,item){

var html = ''
      + '<div class="dataItem">'
          + '<p><b>{{name}}:</b> {{title}} <br> {{phone}} <br> {{accountNumber}}</p>'
      + '</div>';

$('body').append(Mustache.render(html,item));
});