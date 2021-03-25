/* Author: 

*/

var Person = [
    ["dnyanu","inchale","male","mumbai"],
    ["jeson","roy","male","thane"],
    ["john","mark","male","mumbai"]
]

var table = document.getElementById('tbldata');
document.getElementById("form").addEventListener("submit",addrecord);

function addrecord(){
    bindperson(Person);
}
function bindperson(personData){
    var txt = '';
    personData.foreach(function(person,i){
        txt += `
        <tr>
        <td>${person[0]}</td>
        <td>${person[1]}</td>
        <td>${person[2]}</td>
        <td>${person[4]}</td>
        <td><button id="edit">Edit</button></td>
        <td><button id="edit">Delete</button></td>
      </tr>
        `
        table.innerHTML += txt;
    })
}

bindperson(Person);




















