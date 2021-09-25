var hints = [{id: "trifactor19a-h1", type: "hint", dependencies: [], title: "Perfect Square", text: "This equation is a perfect square", variabilization: {}}, {id: "trifactor19a-h2", type: "hint", dependencies: ["trifactor19a-h1"], title: "Factors", text: "In this equation $${ax}^2+bx+c$$ the square root of a and c are 7 and 11 respectively.", variabilization: {}}, {id: "trifactor19a-h3", type: "hint", dependencies: ["trifactor19a-h2"], title: "Plug in", text: "Plug into the perfect square simplified form $${\\left(nx+m\\right)}^2$$ where n is the square root of a and m is the square root of c", variabilization: {}}, ]; export {hints};