import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #487346;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000' viewBox='0 0 200 200'%3E%3Cg %3E%3Cpolygon fill='%23608f57' points='100 57.1 64 93.1 71.5 100.6 100 72.1'/%3E%3Cpolygon fill='%2374ad69' points='100 57.1 100 72.1 128.6 100.6 136.1 93.1'/%3E%3Cpolygon fill='%23608f57' points='100 163.2 100 178.2 170.7 107.5 170.8 92.4'/%3E%3Cpolygon fill='%2374ad69' points='100 163.2 29.2 92.5 29.2 107.5 100 178.2'/%3E%3Cpath fill='%2389CC7C' d='M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z'/%3E%3Cpolygon fill='%237f8f53' points='0 157.1 0 172.1 28.6 200.6 36.1 193.1'/%3E%3Cpolygon fill='%239bad64' points='70.7 200 70.8 192.4 63.2 200'/%3E%3Cpolygon fill='%23B6CC76' points='27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5'/%3E%3Cpolygon fill='%239bad64' points='200 157.1 164 193.1 171.5 200.6 200 172.1'/%3E%3Cpolygon fill='%237f8f53' points='136.7 200 129.2 192.5 129.2 200'/%3E%3Cpolygon fill='%23B6CC76' points='172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200'/%3E%3Cpolygon fill='%237f8f53' points='129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0'/%3E%3Cpolygon fill='%23B6CC76' points='200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2'/%3E%3Cpolygon fill='%239bad64' points='63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0'/%3E%3Cpolygon fill='%23B6CC76' points='0 63.2 63.2 0 27.8 0 0 27.8'/%3E%3C/g%3E%3C/svg%3E");
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    h1 {
        font-size: 5rem;
    }
    * {
        margin: 20px;
        color: white;
    }
    div {
        font-size: 22px;
        background-color: #0000009c;
        padding: 5px 15px;
        border-radius: 5px;
        min-width: 500px;
        text-align: center;
    }

    textarea {
        color: black;
        font-weight: bold;
        background: gray;
    }
`;

export default function Translator() {
    const [text, setText] = useState(["Insira um texto normal"]);
    const [morse, setMorse] = useState([]);

    const handleText = (e) => {
        setText([e.target.value]);
    };

    /* TODO: BOTAO FUNCIONAL COM OPÇÕES PRÉ DETERMINADAS. E INSERIR PONTO PODE SER DA MESMA FORMA INSERIR TTABUA DE INSTRUÇÕES E
ESTILIZAR */

    useEffect(() => {
        setMorse(
            text.map((item) =>
                item
                    .replace(/_/gi, ". . _ _ . _")
                    .replace(/a/gi, ". _")
                    .replace(/Á/gi, ". _ _ . _")
                    .replace(/Ä/gi, ". _ . _")
                    .replace(/b/gi, "_ . . .")
                    .replace(/c/gi, "_ . _ .")
                    .replace(/d/gi, "_ . .")
                    .replace(/e/gi, ".")
                    .replace(/É/gi, ". . _ . .")
                    .replace(/f/gi, ". . _ .")
                    .replace(/g/gi, "_ _ .")
                    .replace(/h/gi, ". . . .")
                    .replace(/i/gi, ". .")
                    .replace(/j/gi, ". _ _ _")
                    .replace(/k/gi, "_ . _")
                    .replace(/l/gi, ". _ . .")
                    .replace(/m/gi, "_ _")
                    .replace(/n/gi, "_ .")
                    .replace(/Ñ/gi, "_ _ . _ _")
                    .replace(/o/gi, "_ _ _")
                    .replace(/Ö/gi, "_ _ _ .")
                    .replace(/p/gi, ". _ _ .")
                    .replace(/q/gi, "_ _ . _")
                    .replace(/r/gi, ". _ .")
                    .replace(/s/gi, ". . .")
                    .replace(/t/gi, "_")
                    .replace(/u/gi, ". . _")
                    .replace(/Ü/gi, ". . _ _")
                    .replace(/v/gi, ". . . _")
                    .replace(/w/gi, ". _ _")
                    .replace(/x/g, "_ . . _")
                    .replace(/y/gi, "_ . _ _")
                    .replace(/z/gi, "_ _ . .")
                    .replace(/1/gi, ". _ _ _ _ ")
                    .replace(/2/gi, " . . _ _ _ ")
                    .replace(/3/gi, " . . . _ _ ")
                    .replace(/4/gi, " . . . . _ ")
                    .replace(/5/gi, " . . . . . ")
                    .replace(/6/gi, " _ . . . . ")
                    .replace(/7/gi, " _ _ . . . ")
                    .replace(/8/gi, " _ _ _ . . ")
                    .replace(/9/gi, " _ _ _ _ . ")
                    .replace(/0/gi, " _ _ _ _ _")
                    .replace(/,/gi, " _ _ . . _ _")
                    .replace(/:/gi, " _ _ _ . . .")
                    .replace(/\?/gi, " . . _ _ . .")
                    .replace(/-/gi, "_ . . . . _")
                    .replace(/"/gi, " . _ . . _ .")
                    .replace(/\(/gi, " _ . _ _ .")
                    .replace(/=/gi, " _ . . . _")
                    .replace(/X/g, "_ . . _")
                    .replace(/\//gi, "_ . . _ .")
                    .replace(/'/gi, ". _ _ _ _ .")
                    .replace(/;/gi, "_ . _ . _ .")
                    .replace(/\)/gi, "_ . _ _ . _")
                    .replace(/\+/gi, "_ . _ _ . _")
                    .replace(/\@/gi, ". _ _ . _ .")
                    .replace(/\s\s/gi, " / ")
            )
        );
    }, [text]);

    return (
        <>
            <Container>
                <h1>Morse Translator</h1>
                <div>
                    <p>{text}</p>
                </div>
                <textarea onChange={handleText} type="text" />
                <div>
                    <p>{morse}</p>
                </div>
            </Container>
        </>
    );
}
