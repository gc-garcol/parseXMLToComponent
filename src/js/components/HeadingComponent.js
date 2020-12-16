const HeandingComponent = {};

HeandingComponent["level-two"] = (headerName) => {
    return `
<h2 class="header-two">${headerName}<h2>
`;
}

HeandingComponent["level-three"] = (headerName) => {
    return `
<h3 class="header-two">${headerName}<h3>
`;
}


module.exports = HeandingComponent;