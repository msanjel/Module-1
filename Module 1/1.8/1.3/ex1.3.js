const integer1= parseInt(prompt('Enter first number:' ));
const integer2= parseInt(prompt('Enter Second number:' ));
const integer3= parseInt(prompt('Enter Third number:' ));
document.querySelector('#target').innerHTML = 'The Sum, Product and Average of the numbers you entered are:'+'<br>'+(integer1+integer2+integer3)+', '+'<br>'+(integer1*integer2*integer3)+' and '+'<br>'+((integer1+integer2+integer3)/3)+ ' respectively'
