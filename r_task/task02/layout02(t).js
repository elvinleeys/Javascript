const postLayout = (() => {
    const showList = (posts) => {
        const tbody = document.querySelector("table.post-table tbody");
        let text = ``;
        posts.forEach((post) => {
            text += `
                <tr>
                    <td>${post.id}</td>
                    <td><a href="${post.id}" class="go-detail">${post.title}</a></td>
                </tr>
            `;
        });
        tbody.innerHTML = text;
    };

    const showPost = (post) => {
        const tbody = document.querySelector("table.post-detail-table tbody");
        let text = ``;
        text += `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>
            `;
        tbody.innerHTML = text;
    };

    const updatePost = (post) => {
        const tbody = document.querySelector("table.post-update-table tbody");
        let text = ``;
        text += `
                <tr>
                    <td>${post.userId}"</td>
                    <td>${post.id}</td>
                    <td><input type="text" value="${post.title}"></td>
                    <td><textarea cols="50" rows="3">${post.body}</textarea></td>
                </tr>
            `;
        tbody.innerHTML = text;
    };

    return { showList: showList, showPost: showPost, updatePost: updatePost };
})();
