var hints = [{id: "comp1b-h1", type: "hint", dependencies: [], title: "General Form", text: "We should begin by writing the general form, and then substitute the given functions."}, {id: "comp1b-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{g x}{f} x$$"], dependencies: ["comp1b-h1"], title: "General Form", text: "What is the general form of $$\\frac{g}{f} x$$?", choices: ["$$\\frac{g x}{f} x$$", "$$g x+f x$$", "$$g x f x$$"]}, {id: "comp1b-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{x^2-\\left(1\\right)}{x-\\left(1\\right)}$$"], dependencies: ["comp1b-h2"], title: "Substitution", text: "What do we get after substituting the given functions?", choices: ["$$\\frac{x^2-\\left(1\\right)}{x-\\left(1\\right)}$$", "$$x^2-\\left(1\\right)+x-\\left(1\\right)$$", "$$\\left(x^2-\\left(1\\right)\\right) \\left(x-\\left(1\\right)\\right)$$"]}, {id: "comp1b-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(x+\\left(1\\right)\\right) \\left(x-\\left(1\\right)\\right)$$"], dependencies: ["comp1b-h3"], title: "Rearrangement", text: "How can we rewrite $$x^2-\\left(1\\right)$$?", choices: ["$$\\left(x+\\left(1\\right)\\right) \\left(x-\\left(1\\right)\\right)$$", "$$x^2$$", "$$\\left(x+\\left(2\\right)\\right) \\left(x-\\frac{1}{2}\\right)$$"]}, {id: "comp1b-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x+\\left(1\\right)$$"], dependencies: ["comp1b-h4"], title: "Rearrangement", text: "What do we get after rearranging the equation?", choices: ["$$x-\\left(1\\right)$$", "$$x^2+\\left(1\\right)$$", "$$x+\\left(1\\right)$$"]}, ]; export {hints};