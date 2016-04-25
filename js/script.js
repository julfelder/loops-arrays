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
var i=0;
var secondList = "<ul>";
while( i< myItems.length){
  secondList+= "<li>" +myItems[i] + "</li>" 
    i++;}
secondList+="</ul>";

document.write(secondList);
