# 🧩 Jogo da Velha Revelação

Uma variação divertida do tradicional **Jogo da Velha** em JavaScript, que implementa estilos dinâmicos e visuais de "chá revelação".

---

## 🔍 Visão Geral

Este projeto implementa um tabuleiro 3x3 de Jogo da Velha, onde a cada jogada as peças ('X' ou 'O') são "reveladas" com efeito visual – criando uma experiência mais interativa e visualmente atrativa.

---

## 🛠️ Tecnologias

- **HTML5** – para estrutura do tabuleiro.
- **CSS3** – para estilização e efeitos.
- **JavaScript (ES6+)** – lógica de jogo, detecção de vitória e alteração de estilos.

---

## 🚀 Como utilizar

1. Clone este repositório:

   ```bash
   git clone https://github.com/andreluizfrancabatista/jogo-da-velha-revelacao.git
   ```

2. Acesse a pasta:

   ```bash
   cd jogo-da-velha-revelacao
   ```

3. Abra o arquivo `index.html` no seu navegador favorito (pode arrastar e soltar ou usar Live Server).

4. Comece a jogar! Clique nas células vazias para marcar 'X' e 'O'. O efeito de revelação aparece ao selecionar.

---

## 🎮 Funcionalidades

* Tabuleiro interativo 3×3.
* Alternância entre jogadores 'X' e 'O'.
* Detecção automática de vitória (linhas, colunas e diagonais) e empate.
* Efeitos de revelação visual ao marcar uma peça.
* Botão **Reiniciar** para começar uma nova partida.

---

## 🧠 Como funciona (pseudocódigo)

```js
const celulas = [...];
let jogadorAtual = 'X';

celulas.forEach(celula => {
  celula.addEventListener('click', () => {
    if (celula está vazia && jogo não terminou) {
      adicionar efeito de revelação;
      marcar 'X' ou 'O';
      checar vitória:
        - se vitória: exibir vencedor;
        - se empate: exibir mensagem.
      alternar jogador.
    }
  });
});

// Botão reiniciar limpa o tabuleiro e reseta estados.
```

---

## 📌 Estrutura dos arquivos

```
/
├── index.html      # Estrutura e referência de scripts/styles
├── style.css       # Estilos visuais e animações
└── script.js       # Lógica do jogo e interações
```

---

## 🧪 Teste

* Abra em qualquer navegador moderno (Chrome, Firefox, Edge).
* Clique nas células para jogar.
* Ao final de um jogo (vitória ou empate), pressione **Reiniciar**.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sintam-se à vontade para abrir issues ou enviar pull requests com:

* Melhorias visuais (animações, efeitos).
* Mensagens de vitória mais elegantes.
* Contador de placares.
* Versões mobile-friendly.

---

## 📄 Licença

Este projeto está sob a [MIT License](https://choosealicense.com/licenses/mit/). Use, modifique e compartilhe livremente! 😄

---

## 📬 Contato

Para dúvidas, sugestões ou apenas para dizer oi:

* **Autor:** André Luiz França Batista
* **GitHub:** [@andreluizfrancabatista](https://github.com/andreluizfrancabatista)

---

**Bom jogo! 🎉**
