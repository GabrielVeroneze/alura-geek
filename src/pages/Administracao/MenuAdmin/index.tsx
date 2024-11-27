import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import GrupoProdutosEditavel from '@/components/GrupoProdutosEditavel'

const MenuAdmin = () => {
    const { produtos, excluirProduto } = useManipularProdutos()

    return (
        <GrupoProdutosEditavel
            categoria="Todos os produtos"
            produtos={produtos}
            removerProduto={excluirProduto}
        />
    )
}

export default MenuAdmin
