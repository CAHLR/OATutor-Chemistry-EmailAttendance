import React from 'react'; import { InlineMath } from 'react-katex';import hints from "./inverse16a-index.js"; const step = {id: "inverse16a", stepAnswer: ["Yes"], problemType: "MultipleChoice", stepTitle: <div> <InlineMath math="f x=\frac{1}{x+2}"/> <InlineMath math="g x=\frac{1}{x}-2"/></div>, stepBody: "", choices: ["Yes", "No"], answerType: "string", hints: hints}; export {step};