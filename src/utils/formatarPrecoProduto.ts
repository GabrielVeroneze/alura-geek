export const converterPrecoEmNumero = (preco: string) => {
    const precoConvertido = preco
        .replace('R$ ', '')
        .replace(/\./g, '')
        .replace(',', '.')

    return Number(precoConvertido)
}

