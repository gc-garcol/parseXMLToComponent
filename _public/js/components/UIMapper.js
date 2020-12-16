(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
const InputComponent = {};

InputComponent["A130_one-input"] = (label, inputProps) =>  {
    return `
<p>${label}</p><br>
<input type="text" id="fname" name="${inputProps[0].name}" value="John" maxlength="${inputProps[0].maxlength}">
`;
}; 

InputComponent["A131_two-input"] = (label, inputProps) =>  {
    return `
<p>${label}</p><br>
<input type="text" name="${inputProps[0].name}" value="John" maxlength="${inputProps[0].maxlength}">
<input type="text" name="${inputProps[1].name}" value="John" maxlength="${inputProps[1].maxlength}">
`;
}; 

InputComponent["A132_selection_box"] = (label, inputProps) =>  {
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

module.exports = InputComponent;
},{}],3:[function(require,module,exports){

const InputComponent = require("./InputComponent");
const HeandingComponent = require("./HeadingComponent");
class UIMapper {
    
    constructor() {
        this.components = InputComponent;
        this.headers = HeandingComponent;
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

module.exports = INSTANCE;
},{"./HeadingComponent":1,"./InputComponent":2}]},{},[3]);
