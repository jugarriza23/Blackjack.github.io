const miModulo = (() => { "use strict"; let d = [],
        e = ["C", "D", "H", "S"],
        f = ["A", "J", "Q", "K"],
        g = [],
        a = document.querySelector("#btnPedir"),
        b = document.querySelector("#btnDetener");
    document.querySelector("#btnNuevo"); let h = document.querySelectorAll(".divCartas"),
        i = document.querySelectorAll("small"),
        c = (e = 2) => { d = j(), g = []; for (let c = 0; c < e; c++) g.push(0);
            i.forEach(a => a.innerText = 0), h.forEach(a => a.innerHTML = ""), a.disabled = !1, b.disabled = !1 },
        j = () => { d = []; for (let a = 2; a <= 10; a++)
                for (let b of e) d.push(a + b); for (let c of e)
                for (let g of f) d.push(g + c); return _.shuffle(d) },
        k = () => { if (0 === d.length) throw "No hay cartas en el deck"; return d.pop() },
        l = b => { let a = b.substring(0, b.length - 1); return isNaN(a) ? "A" === a ? 11 : 10 : 1 * a },
        m = (b, a) => (g[a] = g[a] + l(b), i[a].innerText = g[a], g[a]),
        n = (b, c) => { let a = document.createElement("img");
            a.src = `./cartas/${b}.png`, a.classList.add("carta"), h[c].append(a) },
        o = () => { let [a, b] = g;
            setTimeout(() => { b === a ? alert("Nadie gana :(") : a > 21 ? alert("Computadora gana") : b > 21 ? alert("Jugador Gana") : alert("Computadora Gana") }, 100) },
        p = a => { let b = 0;
            do { let c = k();
                b = m(c, g.length - 1), n(c, g.length - 1) } while (b < a && a <= 21) o() }; return a.addEventListener("click", () => { let d = k(),
            c = m(d, 0);
        n(d, 0), c > 21 ? (console.warn("Lo siento mucho, perdiste"), a.disabled = !0, b.disabled = !0, p(c)) : 21 === c && (console.warn("21, genial!"), a.disabled = !0, b.disabled = !0, p(c)) }), b.addEventListener("click", () => { a.disabled = !0, b.disabled = !0, p(g[0]) }), { nuevoJuego: c } })()