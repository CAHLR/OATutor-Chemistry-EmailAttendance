var hints = [{id: "rotation19b-h1", type: "hint", dependencies: [], title: "Equations of Rotation", text: "The equations of rotation are $$x=x'cos(\\theta)-y'sin(\\theta)$$ and y=x'sin(𝜃)+x'cos(𝜃)", variabilization: {}}, {id: "rotation19b-h2", type: "hint", dependencies: ["rotation19b-h1"], title: "Plugging in the Angle", text: "Because $$\\theta=45$$, plug in the value into the equations of rotation for x and y. Simplify so you are left with an algebraic function (with no trignometric functions)", variabilization: {}}, {id: "rotation19b-h3", type: "hint", dependencies: ["rotation19b-h2"], title: "Substituting Equation of Rotations", text: "Substitute x=(x'-y')/sqrt(2) and y=(x'+y')/sqrt(2) into $$x^2+\\left(4\\right) xy+y^2-\\left(\\left(2\\right) x\\right)+\\left(1\\right)=0$$", variabilization: {}}, {id: "rotation19b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(21x'**2)+(9y'**2)+(4x')-(4sqrt(3)y')-6=0"], dependencies: ["rotation19b-h3"], title: "Algebraic Simplifications", text: "Using FOIL method, combining like terms, and other simplifications, determine the new representation of the equation. Write the answer so that there are no fractions.", variabilization: {}}, ]; export {hints};