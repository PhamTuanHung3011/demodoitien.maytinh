let sotien1;
let value01;
let value011
let value02;
let value022
let giatri1;
let giatri2;
let tinhtoan22;


function sotien2222(){
    sotien1=document.getElementById('sotien').value;
    console.log(sotien1)


}

function onselectchange1(){
    giatri1=document.getElementById('1').value;
    console.log(giatri1)
    value01=document.getElementById('1');
    value011=value01.options[value01.selectedIndex].value;

}

function onselectchange2(){
    giatri2=document.getElementById('2').value;
    console.log(giatri2)
    value02=document.getElementById('2');
    value022=value02.options[value02.selectedIndex].value;
}

function Tinhtoan1(){
    tinhtoan22=(sotien1*value011)/value022;
    console.log(tinhtoan22)
    document.getElementById('hienthi').innerHTML=tinhtoan22;
}