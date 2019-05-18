let str = '<table border="1px" width="100%">';

for( let i = 1; i <= 10; i++){
  str +='<tr>';
  
  for(let j = 1; j <= 10; j++){
    str += '<td>';
    str += i*j;
    str += '</td>';
  }

  str += '</tr>';
}
str += '</table>';

let elm = document.getElementById('wind');
elm.innerHTML = elm.innerHTML + str;