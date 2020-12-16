const readXlsxFile = require("read-excel-file");
const UIMapper = require("./components/UIMapper");
const ReadRowStrategy = require("./utils/ReadRowStrategy");

class Index {

    constructor() {
        this.textarea = document.querySelectorAll("textarea")[0];
        this.fileInput = document.getElementById("js-file");
        this.fileInput.addEventListener('change', this.buildRows.bind(this));
        this.initBlockCode();
    }

    render(rows) {
        let data = [];

        let curLevel2 = null;
        let curLevel3 = null;

        rows.forEach((row, index) => {
            if (index == 0) return;

            if (curLevel2 != row.level2) {
                curLevel2 = row.level2;
                data.push(UIMapper.renderHeader("level-two", row.level2));
            }

            if (curLevel3 != row.level3) {
                curLevel3 = row.level3;
                data.push(UIMapper.renderHeader("level-three", row.level3));
            }

            if (curLevel2 == row.level2 && curLevel3 == row.level3) {
                data.push(UIMapper.renderInput(row.componentType, row.labelName, row.inputs));
            }
        });

        this.editor.getDoc().setValue(data.join(""));
    }

    buildRows() {
        if (this.fileInput.files.length == 0) return;

        let self = this;
        readXlsxFile(this.fileInput.files[0])
            .then((rows) => {
                let instance = new ReadRowStrategy();
                instance.build(rows);
                let parseRows = instance.data;
                console.log(parseRows);
                self.render(parseRows);
            });
    }

    initBlockCode = () => {
        this.editor = CodeMirror.fromTextArea(this.textarea, {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            autoCloseTags: true,
            theme: "darcula",
            tabSize: 4,
            mode: mixedMode
        });
    }
}

const mixedMode = {
    name: "htmlmixed",
    scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
                   mode: null},
                  {matches: /(text|application)\/(x-)?vb(a|script)/i,
                   mode: "vbscript"}]
};

const index = new Index();

const btnCopy = document.getElementsByClassName("js-copy")[0].addEventListener('click', () => {
    navigator.clipboard.writeText(index.editor.getValue());
});

// const fakeData = [
//     {
//         componentType: "A130_one-input",
//         labelName: "labelName0",
//         inputs: [{name: "garcol", maxlength: "3"}]
//     },
//     {
//         componentType: "A132_selection_box",
//         labelName: "labelName1",
//         inputs: [{name: "garcol", maxlength: "3"}]
//     }, 
//     {
//         componentType: "A131_two-input",
//         labelName: "labelName1",
//         inputs: [{name: "garcol", maxlength: "3"}, {name: "garcol", maxlength: "3"}]
//     }
// ];

// index.render(fakeData);


