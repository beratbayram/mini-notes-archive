const veriler = [{
    id: 1034,
    title: "Alışveris Listesi",
    description: "Bu bir alışveriş listesi",
    todo: ["Sut Al", "Soda Al"]
  },
  {
    title: "Okunacaklar Listesi",
    id: 5000,
    description: "Bu bir okuma listesi",
    todo: ["Kitap oku", "Dergi oku"]
  },
  {
    title: "Gezilecekler Listesi",
    id: 2,
    description: "Bu bir gezme listesi",
    todo: ["ankara", "bolu"]
  },
  {
    title: "Oyun Listesi",
    id: 3,
    description: "Bu bir oyun listesi",
    todo: ["kraloyun", "lol"]
  }
]

let yeniVeri = {
  title: "Yeni Liste",
  id: 8,
  description: "Bu bir yeni liste",
  todo: ["Kitap oku", "Gez"]
}

function promiseCallback(resolve, reject) {

  const error = false; //as if you checked an server error here

  if (!error) {
    let sortedArray = veriler.sort((firstEl, secondEl) => {
      return firstEl.id - secondEl.id
    })


    sortedArray.pop();
    sortedArray.shift();

    for (var i = 0; i < 3; i++) {
      sortedArray.push(yeniVeri)
    }

    sortedArray.forEach((item) => {
      item.owner = "Yusuf";
    })

    sortedArray = sortedArray.sort((firstEl, secondEl) => {
      return firstEl.id - secondEl.id
    })

    resolve(sortedArray);

  } else {
    reject("An error occured when processing data")
  }
}

var promiseProcess = new Promise(promiseCallback);

promiseProcess.then((response) => {
  console.log(response);
  response.forEach((item) => {
    console.log(item.owner);
  })
})






// end script