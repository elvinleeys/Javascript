const postLayout = (() => {
    const showList = (posts) => {
        let text = ``;
        // 각각의 post, 즉 각각의 게시글을 가져와서
        posts.forEach((post) => {
            // 모든 내용을 연결하여
            text += `
                <tr>
                    <th>${post.userId}</th>
                    <th><a class="go-detail" href="${post.id}">${post.title}</a></th>
                    <th>${post.body}</th>
                </tr>
            `;
            // 우리가 원하는 조회의 기능은 post의 제목(title)을 눌렀을 때 해당 게시글만
            // 보이도록 설정하는 것이므로 a태그를 이용해 경로를 해당 post에 맞는 id로 설정한다.
        });
        return text;
    };

    const showCreatedPost = (createdPost) => {
        // 새롭게 추가된 게시글의 정보(객체)를
        // 화면 형식에 맞는 태그(문자열)로 변경한다.
        return `
            <tr>
                <td>${createdPost.userId}</td>
                <td>${createdPost.title}</td>
                <td>${createdPost.body}</td>
            </tr>
        `;
    };

    const showPost = (post) => {
        // 새롭게 추가된 게시글의 정보(객체)를
        // 화면 형식에 맞는 태그(문자열)로 변경한다.
        return `
            <tr>
                <td>${post.userId}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>
        `;
    };

    return {
        showList: showList,
        showCreatedPost: showCreatedPost,
        showPost: showPost,
    };
})();
