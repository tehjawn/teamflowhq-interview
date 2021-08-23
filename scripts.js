// Questions regarding the TeamflowHQ Front End Engineer Interview!
// Answers by John Nguyen (https://www.linkedin.com/in/john--nguyen/)

/** 
  Note: When I first got this quiz, I only could get 1, 3, and 4 within 20 minutes.
  The quiz is formatted in a way that isn't always immediately intuitive to pick up IMO.
*/

// Question 1: Create a button that adds a span to a document.

let q1 = () => {
    let e = document.getElementById("base1")
    let b = document.createElement("button")
    b.id = "foobar1"
    b.innerHTML = "Add Span" // Added to help visualize problem.
    e.appendChild(b)
    b.addEventListener("click", () => {
        // vvv TODO: Upon clicking button "foobar1", append a "span" element to div "base1"
        let t = "span"
        // ^^^ Character Limit: 13
        let n = document.createElement(t)
        n.innerHTML = " foobar1 clicked! " // Added to help visualize solution.
        e.appendChild(n)
    })
}
q1()

// ===== //

// Question 2: Loop & Add Elements

let q2 = () => {
    let e = document.getElementById("base2")
    for (let i = 0; i < 5; i++) {
        // vvv TODO: Create "toadd" object to be appended to div "base2"
        let toadd = document.createElement("div")
        toadd.innerHTML = i
        // ^^^ Character Limit: 59
        e.appendChild(toadd)
    }
}
q2()

// === //

// Question 3: Loop & Add Elements w/Context

let q3 = () => {
    let state = 0
    let reducer = (state, action) => {
        if (action.type === "inc") {
            return state + 1
        }
    }
    let e = document.getElementById("base3")
    let render = (i) => {
        e.innerHTML = ""
        for (let i = 0; i < state; i++) {
            // vvv TODO: Add three div elements to the body using the surrounding code.
            e.innerHTML += `<div>inc ${i}</div>` // Added "inc #" for visual clarity
            // ^^^ Character Limit: 46
        }
    }
    let dispatch = (action) => {
        state = reducer(state, action)
        render(state)
    }
    dispatch({ type: "inc" })
    dispatch({ type: "inc" })
    dispatch({ type: "inc" })
}
q3()

// Question 4: Alternating Click Actions

let q4 = () => {
    let f = document.getElementById("q4Button")
    let e = document.getElementById("base4")
    let b = false
    f.addEventListener("click", () => {
        // vvv TODO: Add a div or span element to the div "base4", alternating the element type every other click.
        let t = b ? "span" : "div"
        b = !b
        // ^^^ Character Limit: 27
        let z = document.createElement(t)
        z.innerHTML = (t == "div") ? "div!" : "span!" // Added additional features to aid visualization.
        e.appendChild(z)
    })
}
q4()

// === //

// Question 5: Express.JS Counter
let q5 = () => {
    // NOTE: This is Express.JS Code - MUST RUN WITH Node.js!
    // - Install Node.js Here: https://nodejs.org/en/
    // - Required NPM Packages: "express" and "body-parser"

    const express = require('express')
    const app = require('express')
    const bodyParser = require('body-parser')
    app.use(bodyParser.row({ type: "*/*" }))
    let counter = 0

    // GET "/counter" => Returns current value of "counter"
    app.get("/counter", (req, res) => {
        // vvv TODO: Create a variable "str" that returns the current value of "counter"
        let str = counter + ""
        // ^^^ Character Limit: 21
        res.send(str)
    })

    // POST "/increment" => Increments the current value of "counter" by 1
    app.post("/incremenet", (req, res) => {
        // vvv TODO: Increment the local "counter" variable value by 1; return "ok"
        counter += 1
        let str = "ok"
        // ^^^ Character Limit: 26
        res.send(str)
    })
}

// === //

// Question 6: Override Parent Click
let q6 = () => {
    let e = document.getElementById("base6")
    let p = document.getElementById("papa6")
    let c = document.getElementById("child6")
    p.addEventListener("click", evt => {
        let newSpan = document.createElement("span")
        newSpan.innerHTML = " Papa Span "
        e.appendChild(newSpan)
    })
    c.addEventListener("click", evt => {
        // vvv TODO: On div "child6" clicked, add new div to div "base6"
        evt.stopPropagation()
        // ^^^ Character Limit: 23
        let newDiv = document.createElement("div")
        newDiv.innerHTML = " Child Div "
        e.appendChild(newDiv)
    })
}
q6()

// === //

// Question 7: Express.JS Sum 2 Numbers
let q7 = () => {
    const express = require('express')
    const app = require('express')
    const bodyParser = require('body-parser')
    app.use(bodyParser.raw({ type: "*/*" }))
    app.get("/calc", (req, res) => {
        let result = undefined

        /**
          Example Calculation Requests:
          /calc?op=plus&lhs=42&rhs=13 ==> Return 55
          /calc?op=plus&lhs=5&rhs=9 ==> Return 14
          /calc?op=times&lhs=3&rhs=15 ==> Return 45
          /calc?op=times&lhs=6&rhs=7 ==> Return 42
          /calc?op=minus&lhs=6&rhs=7 ==> Return -1
        */

        // vvv TODO: Catch "req" / "res" parameters in "lhs", "rhs", and "op" variables.
        let lhs = req.params.lhs,
            rhs = req.params.rhs,
            op = req.params.op
        // ^^^ Character Limit: 72

        let left = parseInt(lhs)
        let right = parseInt(rhs)
        if (op === "plus") {
            result = left + right
        }
        if (op === "times") {
            result = left * right
        }
        if (op === "minus") {
            result = left - right
        }
        res.send("" + result)
    })

    app.listen(80)
}

// === //

// Question 8: Add Values from Array
let q8 = () => {
    let d = [100, 107, 200, 150, 50]
    let f = (x) => x > 100
    let g = (x) => x * 2
    let e = document.getElementById("base8")
    // vvv TODO: Add all values from array "d" as text in divs to element "base8"
    let strs = d
    // ^^^ Character Limit: 28
    strs.forEach((z) => {
        let n = document.createElement("div")
        n.innerText = z
        e.appendChild(n)
    })
}
q8()

// === //

// Question 9: Event Bubbling
let q9 = () => {
    let e = document.getElementById("base9")
    // vvv TODO: Let "p" be a variable with a value that enables the user to create a span when clicking on the div "leaf-node9"
    let p = document.getElementById("c9")
    // ^^^ Character Limit: 35

    p.addEventListener("click", () => {
        let newSpan = document.createElement("span")
        newSpan.innerHTML = " newSpan "
        e.appendChild(newSpan)
    })
}
q9()

// === //

// Question 10: Map Elements
let q10 = () => {
    let build = (desc) => {
        let ret = document.createElement(desc.t)
        let chs = desc.chs
        let candidates = chs.map((ch) => build(ch))
        // vvv TODO: Append elements from candidates.
        candidates.forEach(c => ret.append(c))
        // ^^^ Character Limit: 45
        return ret
    }
    let spec = {
        t: "div",
        chs: [
            {
                t: "span",
                chs: []
            },
            {
                t: "div",
                chs: []
            }
        ]
    }
    let e = document.getElementById("base10")
    e.appendChild(build(spec))
}
q10()

// === //

// Helper Functions
let show = (elementId) => {
    document.getElementById(elementId).classList.toggle("hidden")
}