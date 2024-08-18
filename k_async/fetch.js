// const user = {
//     id: 3,
//     name: "이영섭",
// };

// const json_data = JSON.stringify(user);
// const object = JSON.parse(json_data);
// console.log(object.name);

// URL : 경로
// URI : URL에서 IP와 포트 번호를 제외한 나머지

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
        console.log(post.title);
    });
