export const converterPrecoEmNumero = (preco: string) => {
    const precoConvertido = preco
        .replace(/R\$\s/g, '')
        .replace(/\./g, '')
        .replace(',', '.')

    return Number(precoConvertido)
}

export const formatarPrecoEmReal = (preco: number) => {
    const precoFormatado = preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return precoFormatado
}
