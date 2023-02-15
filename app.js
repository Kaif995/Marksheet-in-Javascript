let computer= +prompt("Enter Your Computer Marks: ")
let physics= +prompt("Enter Your Physics Marks: ")
let urdu= +prompt("Enter Your Urdu Marks: ")
let islamiat= +prompt("Enter Your Islamiat Marks: ")
let maths= +prompt("Enter Your Maths Marks: ")
document.write('<table border=1>'+'<tr>'+'<td>'+'Computer'+'</td>'+'<td>'+computer+'</td>'+'</tr>')
document.write('<tr>'+'<td>'+'Physics'+'</td>'+'<td>'+physics+'</td>'+'</tr>')
document.write('<tr>'+'<td>'+'Urdu'+'</td>'+'<td>'+urdu+'</td>'+'</tr>')
document.write('<tr>'+'<td>'+'Islamiat'+'</td>'+'<td>'+islamiat+'</td>'+'</tr>')
document.write('<tr>'+'<td>'+'Maths'+'</td>'+'<td>'+maths+'</td>'+'</tr>')
let total =computer + physics +urdu+islamiat+ maths;
document.write('<tr>'+'<td>'+'Total'+'</td>'+'<td>'+total+" out of 500"+'</td>'+'</tr>')
let per=total / 500*100;
if (per>100) {
    document.write('<tr>'+'<td>'+'Grade'+'</td>'+'<td>'+"Invalid Percentage!"+'</td>'+'</tr>')
}
if (per<40) {
    document.write('<tr>'+'<td>'+'Grade'+'</td>'+'<td>'+"Invalid Grade!"+'</td>'+'</tr>')
}
document.write('<tr>'+'<td>'+'Percentage'+'</td>'+'<td>'+per+'%'+'</td>'+'</tr>')
if (per>=90 && per<=100) {
    document.write('<tr>'+'<td>'+'Grade'+'</td>'+'<td>'+"A1"+'</td>'+'</tr>'+'</table>')
}
if (per>=80 && per<90) {
    document.write('<tr>'+'<td>'+'Grade'+'</td>'+'<td>'+"A+"+'</td>'+'</tr>'+'</table>')
}
if (per>=70 && per<80) {
    document.write('<tr>'+'<td>'+'Grade'+'</td>'+'<td>'+"A"+'</td>'+'</tr>'+'</table>')
}
if (per>=60 && per<70) {
    document.write('<tr>'+'<td>'+'Grade'+'</td>'+'<td>'+"B"+'</td>'+'</tr>'+'</table>')

}
if (per>=50 && per<60) {
    document.write('<tr>'+'<td>'+'Grade'+'</td>'+'<td>'+"C"+'</td>'+'</tr>'+'</table>')
}
