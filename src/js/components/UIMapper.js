
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