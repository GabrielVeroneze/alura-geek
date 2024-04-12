import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import GrupoProdutosEditavel from '@/components/GrupoProdutosEditavel'

const MenuAdmin = () => {
    const { produtos } = useManipularProdutos()

    return (
        <GrupoProdutosEditavel
            categoria="Todos os produtos"
            produtos={produtos}
        />
    )
}

export default MenuAdmin
