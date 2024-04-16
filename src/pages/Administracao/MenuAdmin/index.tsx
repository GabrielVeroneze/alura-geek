import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import GrupoProdutosEditavel from '@/components/GrupoProdutosEditavel'

const MenuAdmin = () => {
    const { produtos, removerProduto } = useManipularProdutos()

    return (
        <GrupoProdutosEditavel
            categoria="Todos os produtos"
            produtos={produtos}
            removerProduto={removerProduto}
        />
    )
}

export default MenuAdmin
