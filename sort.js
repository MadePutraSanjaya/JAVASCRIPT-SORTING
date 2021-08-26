function bebas (angka) {
    for (let i = 0; i < angka.length; i++) {
       var x = i
    
       for (let j = i+1; j < angka.length; j++) {
            if (angka[j] < angka[x]) {
                x = j
            }
       }
        if (x != i) {
            var pisah = angka[i]
            angka[i] = angka[x]
            angka[x] = pisah;
        }
    }
    
    return angka
    
    }
    
    var akhir = bebas ([10,1,2,3,7,4,11])
    console.log(akhir );
    