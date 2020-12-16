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