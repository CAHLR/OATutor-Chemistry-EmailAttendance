var hints = [{id: "LinIneq1a-h1", type: "hint", dependencies: [], title: "Left side symbol", text: "2 is included in the interval", variabilization: {}}, {id: "LinIneq1a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["["], dependencies: ["LinIneq1a-h1"], title: "Left side symbol", text: "What symbol should we use?", choices: ["(", "["], variabilization: {}}, {id: "LinIneq1a-h3", type: "hint", dependencies: [], title: "Right side value", text: "We use the symbol $$\\infty$$ to represent $$\\infty$$.", variabilization: {}}, {id: "LinIneq1a-h4", type: "hint", dependencies: ["LinIneq1a-h3"], title: "Right side symbol", text: "We can't \"equate\" to $$\\infty$$ (or negative infinity).", variabilization: {}}, {id: "LinIneq1a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: [")"], dependencies: ["LinIneq1a-h4"], title: "Right side symbol", text: "What symbol should we use?", choices: [")", "]"], variabilization: {}}, ]; export {hints};