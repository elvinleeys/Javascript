const userLayout = (() => {
    const showList = (users) => {
        users.forEach((user) => {
            console.log(user.id);
        });
    };

    return { showLise: showList };
})();
