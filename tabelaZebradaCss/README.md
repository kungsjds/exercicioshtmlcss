<strong>

<h1>Como fazer uma tabela zebrada, utilizando :nth-child() pelo CSS</h1>

<h2>----Reference----<h2>
<h3>https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child<h3> 

<h2>Exemplos:</h2>

<h3>Aplica o efeito no primeiro elemento</h3>
table tr td:nth-child(1) {
    text-align: center;
}

</h3>Aplica o efeito nos valores a partir do elemento 2 em diante</h3>
table tr td:nth-child(n+2),
table thead th:nth-child(n+2) {
    text-align: left;
}

<h3>Aplica o efeito nos valores pares 2, 4, 6...</h3>
table tbody tr:nth-child(even) {
    background-color: rgba(135, 206, 250, 0.5);
    color: #000;
}

<h3>Tem o mesmo efeito do even, valores pares.</h3>
table tr:nth-child(2n) {
    background-color: #b7b7b7;
} 


<h3>Aplica o efeito nos valores impares 1, 3, 5...</h3>
table tbody tr:nth-child(odd) {
    background-color: rgba(135, 206, 250, 0.5);
    color: #000;
}

</strong>