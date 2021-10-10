var hints = [{id: "rational7a-h1", type: "hint", dependencies: [], title: "The least common multiple", text: "The LCM or least common multiple of a set of numbers is the smallest positive integer that is divisible by all those numbers.", variabilization: {}}, {id: "rational7a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(x+\\left(5\\right)\\right) \\left(x-\\left(3\\right)\\right)$$"], dependencies: ["rational7a-h1"], title: "The least common multiple", text: "To combine the fractions, we want to find the LCM of the denominators. What is it?", variabilization: {}}, {id: "rational7a-h3", type: "hint", dependencies: ["rational7a-h2"], title: "Multiplication by 1", text: "We must multiple each expression by the appropriate form of 1 to obtain xy as the denominator for each fraction.", variabilization: {}}, {id: "rational7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{x-\\left(3\\right)}{x-\\left(3\\right)}$$"], dependencies: ["rational7a-h3"], title: "Multiplication by 1", text: "What should we multiply to $$\\frac{3}{x+\\left(5\\right)}$$ so that its denominator becomes $$\\left(x+\\left(5\\right)\\right) \\left(x-\\left(3\\right)\\right)$$?", variabilization: {}}, {id: "rational7a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{x+\\left(5\\right)}{x+\\left(5\\right)}$$"], dependencies: ["rational7a-h4"], title: "Multiplication by 1", text: "What should we multiply to $$\\frac{1}{x-\\left(3\\right)}$$ so that its denominator becomes $$\\left(x+\\left(5\\right)\\right) \\left(x-\\left(3\\right)\\right)$$?", variabilization: {}}, {id: "rational7a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{\\left(2\\right) \\left(x-\\left(7\\right)\\right)}{x+\\left(5\\right)} \\left(x-\\left(3\\right)\\right)$$"], dependencies: ["rational7a-h5"], title: "Adding Terms", text: "Now that both terms have the same denominator, we can add their numerators. What is our final answer?", variabilization: {}}, ]; export {hints};