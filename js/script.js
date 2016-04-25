// loop
var count = 0;
var list = '';

while (count < 10) {
  list += '<li>current count is: ' + count + '</li>';
  count += 1;
}

// output results
document.write("<h1>Loops</h1>");
document.write("<ol>" + list + "</ol>");

var myItems = [
  ["question one", " question one"]
  ["question two", " asnwer two"]
  ];
var secondList = "<ul>";
while(var i=0; i< myItems.length;i++;){
  secondList+= "<li>" +myItems[i] + "</li>" ;
}
secontlist+="</ul>";

document.write(secondList);
