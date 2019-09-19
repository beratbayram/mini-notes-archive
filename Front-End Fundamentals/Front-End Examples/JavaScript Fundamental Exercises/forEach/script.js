var myObj = {
  a: 75,
  b: "b",
  c: [{
          x: [2, 8],
          y: ["two", "eight"]
      },
      {
          x: [3, 4],
          y: ["three", "four"]
      }
  ]
}

function findMe(arr) {
  arr.forEach(element => {
      element.x.forEach((varx, indexx) => {
          console.log(indexx + ": " + varx);
      });
      console.log("--------------------");
      element.y.forEach((vary, indexy) => {
          console.log(indexy + ": " + vary);
      });
      console.log("####################");

  });
}


if (typeof myObj.a === 'object') findMe(myObj.a)
if (typeof myObj.b === 'object') findMe(myObj.b)
if (typeof myObj.c === 'object') findMe(myObj.c)
