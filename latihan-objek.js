// objek 1
const motorNmx = {
    banDepan : '110', 
    banBelakag : '110',
    merek : 'Nmx',
    cc : '155',
    tipe : 'new Nmx 155',
    warna : 'silver',
    'panjang motor' : '1955mm',
};
console.log(motorNmx[key]);
console.log(motorNmx.tipe);
console.log(motorNmx);
motorNmx.lebar = '800mm'; 
motorNmx['lebar']= '750mm';
console.log(motorNmx);
delete motorNmx.tipe // buat hapus
console.log(motorNmx);

// objek 2
const hpIphone ={
    tipe : 'iphone 14 pro max',
    tinggi : '160,7mm',
    lebar : '77,6mm',
    berat : '240gr',
    tebal : '7.85',
};
console.log(hpIphone[key]);
console.log(hpIphone.tipe);
console.log(hpIphone);
hpIphone.ram = '6gb';
hpIphone['ram'] = '7gb';
delete hpIphone.tinggi
console.log(hpIphone);

// objek 3
const tvSamsung = {
    harga : '2.622.000',
    merek : 'samsung',
    lebar : '32inch',
    tipe : 'tv led samsung 32 inch ',
    warna : 'hitam',
    tinggi : '39,8cm',
};
console.log(tvSamsung[key];)
console.log(tvSamsung.tipe);
console.log(TvSamsung);
tvSamsung.rasio = '16:9';
hpIphone['ram'] = '7gb';
delete tvSansung.tinggi
console.log(tvSamsung);



