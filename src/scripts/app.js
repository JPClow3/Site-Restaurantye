// js/main.js

const { createApp } = Vue;

createApp({
  data() {
    return {
      // cardapioBoasVindas: 'Bem-vindo! Explore nosso cardápio abaixo:', // Pode remover se não usar mais
      hamburgers: [
        // ... (seus hambúrgueres como antes)
        {
          id: 1,
          nome: 'X-Burger Clássico',
          descricao: 'Pão, carne 100g, queijo mussarela e molho especial.',
          preco: 18.9,
          imagem: 'images/xburger.jpg',
        },
        {
          id: 2,
          nome: 'Duplo Bacon Burger',
          descricao:
            'Pão, 2x carne 100g, dobro de bacon, queijo cheddar e molho barbecue.',
          preco: 25.5,
          imagem: 'images/duplobacon.jpg',
        },
        {
          id: 3,
          nome: 'Burger Vegetariano',
          descricao:
            'Pão integral, burger de grão de bico, alface, tomate, queijo branco e maionese verde.',
          preco: 22.0,
          imagem: 'images/vegetariano.jpg',
        },
      ],
      pizzas: [
        // ... (suas pizzas como antes)
        {
          id: 4,
          nome: 'Pizza Mussarela',
          descricao: 'Molho de tomate, queijo mussarela, orégano e azeitonas.',
          preco: 35.0,
          imagem: 'images/mussarela.jpg',
        },
        {
          id: 5,
          nome: 'Pizza Calabresa',
          descricao:
            'Molho de tomate, queijo mussarela, calabresa fatiada, cebola e orégano.',
          preco: 38.0,
          imagem: 'images/calabresa.jpg',
        },
      ],
      // <<< NOVO: Array para guardar os itens do carrinho >>>
      carrinho: [],
    };
  },
  methods: {
    formatarPreco(valor) {
      return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
    // <<< NOVO: Método para adicionar itens ao carrinho >>>
    adicionarAoCarrinho(item) {
      // Por enquanto, simplesmente adiciona o item ao array
      // (Mais tarde, poderíamos verificar se já existe e incrementar quantidade)
      this.carrinho.push(item);
      console.log('Carrinho atual:', this.carrinho); // Mostra o carrinho no console do navegador
    },
  },
}).mount('#app');
