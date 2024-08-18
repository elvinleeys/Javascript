const postService = (() => {
    const findAll = async (callback) => {
        // 특정사이트 게시글에 관한 데이터를 가져와서
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "get",
            }
        );
        const posts = await response.json();
        // 해당 데이터들을 callback함수에 전달함으로써 객체화한다.
        if (callback) {
            return callback(posts);
        }
    };

    // 게시글 추가
    const create = async (post, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "post",
                body: JSON.stringify(post),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            }
        );
        // 추가된 게시글의 정보를 createdPost(객체)에 담는다.
        const createdPost = await response.json();
        if (callback) {
            // callback 함수에 추가된 게시글 객체를 전달한다.
            return callback(createdPost);
        }
    };

    //조회
    const read = async (postId, callback) => {
        // jsonpaceholder사이트에서 경로를 확인해보면, posts/라는 경로뒤에
        // 각 post의 id가 연결되면, 해당 번호의 게시글 객체가 나타난다.
        // 따라서 post 각각의 Id를 받아와서 경로에 연결시켜준다.(fetch)
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        // 이후 해당 response를 json으로 풀어준다.
        const post = await response.json();
        console.log(post);
        if (callback) {
            return callback(post);
        }
    };

    return { findAll: findAll, create: create, read: read };
})();
