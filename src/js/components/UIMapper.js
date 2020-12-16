class UIMapper {
    
    constructor() {
        this.components = {};
        this.headers = {};
    }

    /**
     * 
     * @param {String} componenType 
     * @param {String} label 
     * @param {Array} inputProps : object array. For example: [{name: "username", maxlength: 3}]
     */
    renderInput(componenType, label, inputProps) {
        return this.components[componenType](label, inputProps);
    }

    /**
     * 
     * @param {String} headerType 
     * @param {String} headerName 
     */
    renderHeader(headerType, headerName) {
        return this.headers[headerType](headerName);
    }

}

const INSTANCE = new UIMapper();

INSTANCE.headers["level-one"] = (headerName) => {
    return `
<h1 class="header-one">${headerName}<h1>
    `;
}

INSTANCE.headers["level-two"] = (headerName) => {
    return `
        <h2 class="header-two">${headerName}<h2>
    `;
}

INSTANCE.components["A130_one-input"] = (label, inputProps) =>  {
    return `
<p>${label}</p><br>
<input type="text" id="fname" name="${inputProps[0].name}" value="John" maxlength="${inputProps[0].maxlength}"><br>
    `;
}; 

INSTANCE.components["A131_two-input"] = (label, inputProps) =>  {
    return `
<p>${label}</p><br>
<input type="text" id="fname" name="${inputProps[0].name}" value="John" maxlength="${inputProps[0].maxlength}">
<input type="text" id="fname" name="${inputProps[1].name}" value="John" maxlength="${inputProps[1].maxlength}"><br>
    `;
}; 

INSTANCE.components["A132_selection_box"] = (label, inputProps) =>  {
    return `
<p>${label}</p><br>
<input type="hidden" name="${inputProps[0].name}" maxlength="${inputProps[0].maxlength}">
<select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
</select>
    `;
}; 

module.exports = INSTANCE;