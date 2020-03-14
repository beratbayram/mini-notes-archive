axios.get('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    console.log(response.data);
    let data = response.data;
    data.forEach((item) => {
      console.log(item.title);
    })
  })
  .catch((e) => {console.log(e);})



// end script
