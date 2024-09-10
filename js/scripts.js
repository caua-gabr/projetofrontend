// Função para validar e enviar o formulário de cadastro de cliente
function handleClientFormSubmit(event) {
    event.preventDefault(); 
    
    // Coleta os dados 
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    // Validação de campos preenchidos
    if (!nome || !endereco || !telefone || !email) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    alert('Cliente cadastrado com sucesso!');
}

// Função para validar e enviar o formulário de cadastro do pet
function handlePetFormSubmit(event) {
    event.preventDefault(); 

    // Coleta os dados 
    const nome = document.getElementById('nome').value;
    const raca = document.getElementById('raca').value;
    const telefone = document.getElementById('telefone').value;

    // Validação de campos preenchidos
    if (!nome || !raca || !telefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    alert('Pet cadastrado com sucesso!');
}

// Adiciona ouvintes de evento aos formulários
document.addEventListener('DOMContentLoaded', () => {
    const clientForm = document.querySelector('form[action="/cadastro-cliente"]');
    const petForm = document.querySelector('form[action="/cadastro-pet"]');

    if (clientForm) {
        clientForm.addEventListener('submit', handleClientFormSubmit);
    }

    if (petForm) {
        petForm.addEventListener('submit', handlePetFormSubmit);
    }
});

// Dados dos produtos
const produtos = [
    { nome: 'Ração Premium', descricao: 'Ração de alta qualidade para cães e gatos.', valor: 'R$ 120,00', imagem: 'assets/racao-premium.jpg' },
    { nome: 'Brinquedo para Cães', descricao: 'Brinquedo resistente e divertido para cães.', valor: 'R$ 45,00', imagem: 'assets/brinquedo-caes.jpg' },
    { nome: 'Shampoo para Pets', descricao: 'Shampoo suave e eficaz para o banho dos pets.', valor: 'R$ 30,00', imagem: 'assets/shampoo-pets.jpg' },
    { nome: 'Cama para Gatos', descricao: 'Cama confortável e estilosa para gatos.', valor: 'R$ 80,00', imagem: 'assets/cama-gatos.jpg' }
];

//  Gera a lista de produtos na página
function displayProducts() {
    const carousel = document.querySelector('.carousel');
    
    produtos.forEach(produto => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p><strong>${produto.valor}</strong></p>
        `;

        carousel.appendChild(productDiv);
    });
}

// Adiciona a lista de produtos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});