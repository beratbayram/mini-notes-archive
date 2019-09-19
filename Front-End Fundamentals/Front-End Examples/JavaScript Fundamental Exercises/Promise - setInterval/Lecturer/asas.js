var obje = {
    key1: 3,
    key2: "yazi",
    key3: [{
            array1: [1, 2, 3],
            array2: ["a", "b", "c"]
        },
        {
            array1: [4, 5, 6],
            array2: ["d", "e", "f"]
        }
    ]
}


for (var i = 0; i < Object.keys(obje).length; i++) {

    let tipdegil = typeof (Object.values(obje)[i])

    if (tipdegil == 'object') {
        
        let keydegil = obje[Object.keys(obje)[i]]

        console.log(keydegil.length);

        for (var j = 0; j < keydegil.length; j++) {

            let a1 = Object.values(keydegil)[j]
            console.log(a1);

            for (var i = 0; i < 2; i++) {
                let deger = a1[Object.keys(a1)[i]]
                console.log(deger);

                deger.forEach(function (value, index) {
                    console.log("index: " + index + ", " + "value: " + value)
                })
                console.log("------------");
            }
        }
    }
}