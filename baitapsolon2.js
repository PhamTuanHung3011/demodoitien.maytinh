let so1;
let so2;
let so3;



so1 = document.getElementById('nhapso1').value;
so2 = document.getElementById('nhapso2').value;
so3 = document.getElementById('nhapso3').value;

so1=parseInt(so1);
so2=parseInt(so2);
so3=parseInt(so3);



function logic() {
    if (so1>so2){
        if (so1>so3){
            if (so2>so3){
                document.getElementById('dapan').innerHTML= so2;
            } else{
                document.getElementById('dapan').innerHTML= so3;
            }
        } else {
            document.getElementById('dapan').innerHTML= so1;
        }
    } else {
        if (so2 > so3) {
            if (so1 > so3) {
                document.getElementById('dapan').innerHTML = so3;
            } else {
                document.getElementById('dapan').innerHTML = so1;
            }
        }else {
                    document.getElementById('dapan').innerHTML = so2;
            }
    }
}