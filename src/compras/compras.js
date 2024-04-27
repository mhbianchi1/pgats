const calcularTotal = (ferramentas, comprar) => {
    if (((ferramentas.length === 0) && (comprar.length === 0)) || 
            (ferramentas.length === 0 || comprar.length === 0 )) {
        throw new Error("Ambas as listas precisam ter ao menos um item.")
    } else {
        let encontrei = false;
        let itensEncontrados = 0;
        let ferramentasEncontradas = []; 

        for (let i = 0; i < comprar.length; i++) {
            for (let j = 0; j < ferramentas.length; j++) {
                if (comprar[i] === ferramentas[j].nome) {
                    encontrei = true;
                    itensEncontrados += ferramentas[j].preco;
                    ferramentasEncontradas[ferramentasEncontradas.length] = comprar[i];
                }
            }
        }
        
        if (!encontrei) {
            throw new Error("Nenhuma ferramenta desejada encontrada.");
        } else {
            const valorFormatado = itensEncontrados.toFixed(2);

            let ferramentasFormatadas = ""
            for (let k = 0; k < ferramentasEncontradas.length; k++) {
                ferramentasFormatadas += ferramentasEncontradas[k];
                if (k < ferramentasEncontradas.length - 1) {
                    ferramentasFormatadas += ", ";
                }
            }
            return `O valor a pagar pelas ferramentas (${ferramentasFormatadas}) é R$ ${valorFormatado}`;
        }
    }
}

module.exports = {
    calcularTotal
}