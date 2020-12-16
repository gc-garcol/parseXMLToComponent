const readXlsxFile = require("read-excel-file");
const UIMapper = require("./components/UIMapper");

class Index {
    constructor() {
        this.textarea = document.querySelectorAll("textarea")[0];
        this.fileInput = document.getElementById("js-file");
    }

    render(rows) {
        let data = [];

        rows.forEach(row => {
            data.push(UIMapper.renderInput(row.componentType, row.labelName, row.inputs));
        });

        this.textarea.innerHTML = data.join("");

        this.initBlockCode();
    }

    initInputFileOnChangeEvent() {
        this.fileInput.addEventListener('change', () => {
            readXlsxFile(input.files[0]).then((rows) => {
                
            })
        })
    }

    initBlockCode = () => {
        var editor = CodeMirror.fromTextArea(this.textarea, {
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

const fakeData = [
    {
        componentType: "A130_one-input",
        labelName: "labelName0",
        inputs: [{name: "thai", maxlength: "3"}]
    },
    {
        componentType: "A132_selection_box",
        labelName: "labelName1",
        inputs: [{name: "thai", maxlength: "3"}]
    }
];

index.render(fakeData);


