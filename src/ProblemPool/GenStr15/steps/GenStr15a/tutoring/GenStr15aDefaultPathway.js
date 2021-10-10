var hints = [{id: "GenStr15a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr15a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$10-8k=-10$$"], dependencies: ["GenStr15a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr15a-h3", type: "hint", dependencies: ["GenStr15a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation.", variabilization: {}}, {id: "GenStr15a-h4", type: "hint", dependencies: ["GenStr15a-h3"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation.", variabilization: {}}, {id: "GenStr15a-h5", type: "hint", dependencies: ["GenStr15a-h4"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr15a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-8k=-20$$"], dependencies: ["GenStr15a-h5"], title: "Subtraction", text: "Subtract 10 from each side.", variabilization: {}}, {id: "GenStr15a-h7", type: "hint", dependencies: ["GenStr15a-h6"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "GenStr15a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$k=\\frac{5}{2}$$"], dependencies: ["GenStr15a-h7"], title: "Division", text: "Divide -8 from each side.", variabilization: {}}, {id: "GenStr15a-h9", type: "hint", dependencies: ["GenStr15a-h8"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "GenStr15a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr15a-h9"], title: "Verification", text: "Check whether $$-\\left(6\\right)-\\left(8\\right) \\left(\\frac{5}{2}-\\left(2\\right)\\right)$$ equals -10.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};