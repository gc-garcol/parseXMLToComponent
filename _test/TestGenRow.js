let rowsData = [
    ["LabelName", "level-1", "level-2", "level-3", "inputName", "maxLength", "componentType"],
    ["labelName0", "level-1-0", "level-2", null, "thai", 3, "A130_one-input"],
    ["labelName1", "level-1-1", "level-2-0", null, "thai2", 3, "A132_selection_box"],
    ["labelName2", "level-1-1", "level-2-0", "level-3-0", "thai2", 3, "A132_selection_box"],
    ["labelName3", "level-1-1", "level-2-0", "level-3-0", "thai2", 3, "A132_selection_box"],
    ["labelName4", "level-1-1", "level-2-0", "level-3-0", "thai2", 3, "A132_selection_box"],
    ["labelName5", "level-1-1", "level-2-0", null, null, null, "A132_selection_box"],
    ["sameName", "level-1-1", "level-2-0", null, "thainame", "3", "A131_two-input"],
    ["sameName", "level-1-1", "level-2-0", null, "garcolname", "3", "A131_two-input"]
]

let data = [];

let parseRowsToTree = (rows) => {
    rows.forEach(row => {
        let labelname = trim(row, 0);
        let inputName = trim(row, 4);
        let componentType = trim(row, 5);
        
        let size = data.length;
        if (size > 0 && data[size - 1].labelname == labelname) {
            data[size - 1].inputs.push(inputName);
        } else {
            let parseData = {
                labelname: labelname,
                inputs: [inputName],
                componentType: componentType
            }
            data.push(parseData);
        }
    });
    console.log(data);
}

let trim = (row, index) => {
    return row[index] ? (row[index] + "").trim() : row[index];
}

parseRowsToTree(rowsData);