// Promise

const posts = [{
    title: "Baslık 1",
    body: "Lorem ıpsum 1"
  },
  {
    title: "Baslık 2",
    body: "Lorem ipsum 2"
  }
];


function getPosts() {
  console.log(posts);
}

function createPost(post) {
  console.log("Suan promisin resolve yada reject olmasını bekliyorum");
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      posts.push(post)

      const error = true;

      if (!error) {
        resolve("Ben artık sozumu tuttum ve resolve oldum")
      } else {
        reject("An error accured")
      }

    }, 5000)
  })
}

createPost({
    title: "Baslık 3",
    body: "Lorem ipsum 3"
  })
  .then((response) => {
    console.log(response);
    getPosts()
  })
  .catch((e) => {
    console.log(e);
  })

console.log("Hello World");









// end script