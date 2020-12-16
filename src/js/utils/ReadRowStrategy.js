class ReadRowStrategy {

    constructor() {
        this.data = [];
    }

    build(rows) {
        rows.forEach(row => {
            let labelName = this.trim(row, 0);
            let level2 = this.trim(row, 1);
            let level3 = this.trim(row, 2);
            let inputName = this.trim(row, 3);
            let maxLength = this.trim(row, 4);
            let componentType = this.trim(row, 5);

            let size = this.data.length;
            if (size > 0 && this.data[size - 1].labelName == labelName && this.data[size - 1].level2 == level2 && this.data[size - 1].level3 == level3) {
                this.data[size - 1].inputs.push({name: inputName, maxlength: maxLength});
            } else {
                let parseData = {
                    level2: level2,
                    level3: level3,
                    labelName: labelName,
                    inputs: [{name: inputName, maxlength: maxLength}],
                    componentType: componentType
                }
                this.data.push(parseData);
            }
        })
    }

    trim(row, index) {
        return row[index] ? (row[index] + "").trim() : row[index];
    }

}

module.exports = ReadRowStrategy;