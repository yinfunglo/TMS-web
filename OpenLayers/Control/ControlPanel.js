var placeVisited=["Beijing"];
for(var i=0;i<placeVisited.length;i++){
var button=document.createElement("button");
button.id=placeVisited[i]
var butContent=document.createTextNode(placeVisited[i]);
button.appendChild(butContent);
var buttonID=document.getElementById(placeVisited[i]);
document.body.insertBefore(button,buttonID);
};
$('#Beijing').click(function(){
alert("Beijing");
});