let so1;
let so2;
let ketqua;

so1 = document.getElementById('nhapso1');
so2 = document.getElementById('nhapso2');

function hamtinhtoan(dau) {
    switch (dau) {
        case '+':
            ketqua = parseInt(so1.value) + parseInt(so2.value);
            break;
        case '-':
            ketqua = parseInt(so1.value) - parseInt(so2.value);
            break;
        case 'x':
            ketqua = parseInt(so1.value) * parseInt(so2.value);
            break;
        case '/':
            ketqua = parseInt(so1.value)/parseInt(so2.value);
            break;
    }
    document.getElementById('dapan').innerHTML=ketqua;

    // tong= parseInt(so1.value,10) + parseInt(so2.value,10);
    // document.getElementById('dapan').innerHTML=tong;
    // console.log(tong);
    // console.log(typeof so1,so2);
}

