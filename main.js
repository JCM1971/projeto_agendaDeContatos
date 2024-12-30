
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão.
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        const table = document.getElementById('contactTable').getElementsByTagName('tbody') [0];

        // Cria uma linha e adiciona as células.
        const newRow = table.insertRow();
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);

        // Insere os valores nas células
        nameCell.textContent = name;
        phoneCell.textContent = phone;

        // Limpa os campos dos formulários.
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
