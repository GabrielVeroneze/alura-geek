import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import GrupoProdutos from '@/components/GrupoProdutos'

const TodosProdutos = () => {
    const { produtos } = useManipularProdutos()

    return (
        <GrupoProdutos
            modelo="editar"
            categoria="Todos os produtos"
            produtos={produtos}
        />
    )
}

export default TodosProdutos
