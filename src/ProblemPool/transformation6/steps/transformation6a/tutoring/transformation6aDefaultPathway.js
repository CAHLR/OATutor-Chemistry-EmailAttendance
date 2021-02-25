var hints = [{id: "transformation6a-h1", type: "hint", dependencies: [], title: "Definition of an Even Function", text: "A function is called an even function if for every input x, $$f x=f{\\left(-x\\right)}$$."}, {id: "transformation6a-h2", type: "hint", dependencies: ["transformation6a-h1"], title: "Definition of an Odd Function", text: "A function is called an odd function if for every input x, $$f x=-f{\\left(-x\\right)}$$."}, {id: "transformation6a-h3", type: "hint", dependencies: ["transformation6a-h2"], title: "How to Find f(-x)", text: "Find f(-x) by subsituting -x in wherever x appears in the original equation. $${-x}^n=x^n$$ when n is an even, and $${-x}^n=-\\left(x^n\\right)$$ when n is odd-- for example, (x+5)**2=(-(-x-5))**2=(x+5)**2."}, {id: "transformation6a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$${\\left(x+\\left(2\\right)\\right)}^2$$"], dependencies: ["transformation6a-h3"], title: "Determining f(-x)", text: "What is f(-x) equal to?", choices: ["$$-\\left({\\left(x+\\left(2\\right)\\right)}^2\\right)$$", "$${\\left(x+\\left(2\\right)\\right)}^2$$", "$${\\left(x-\\left(2\\right)\\right)}^2$$"]}, {id: "transformation6a-h5", type: "hint", dependencies: ["transformation6a-h4"], title: "How to Find -f(-x)", text: "Find -f(-x) by multiplying each term of f(-x) by -1."}, {id: "transformation6a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$-\\left({\\left(x+\\left(2\\right)\\right)}^2\\right)$$"], dependencies: ["transformation6a-h5"], title: "Determining -f(-x)", text: "What is -f(-x) equal to?", choices: ["$$-\\left({\\left(x+\\left(2\\right)\\right)}^2\\right)$$", "$${\\left(x+\\left(2\\right)\\right)}^2$$", "$${\\left(x-\\left(2\\right)\\right)}^2$$"]}, {id: "transformation6a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["transformation6a-h6"], title: "Checking if f(x) is Even", text: "Does $$f x=f{\\left(-x\\right)}$$?", choices: ["Yes", "No"]}, {id: "transformation6a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["transformation6a-h7"], title: "Checking if f(x) is Odd", text: "Does $$f x=-f{\\left(-x\\right)}$$?", choices: ["Yes", "No"]}, ]; export {hints};