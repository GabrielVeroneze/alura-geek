import { useFormularioProduto } from '@/hooks/useFormularioProduto'
import CampoTextoFloatLabel from '@/components/CampoTextoFloatLabel'
import styles from './FormularioProduto.module.scss'

const FormularioProduto = () => {
    const { produtoDados, handleDadosChange } = useFormularioProduto()

    return (
        <form className={styles.formulario}>
            <h2 className={styles.titulo}>Adicionar novo produto</h2>
            <CampoTextoFloatLabel
                label="URL da imagem"
                inputConfig={{
                    type: 'url',
                    id: 'imagem',
                    name: 'imagem',
                    value: produtoDados.imagem,
                    onChange: evento => handleDadosChange(evento),
                }}
            />
            <CampoTextoFloatLabel
                label="Categoria"
                inputConfig={{
                    type: 'text',
                    id: 'categoria',
                    name: 'categoria',
                    value: produtoDados.categoria,
                    onChange: evento => handleDadosChange(evento),
                }}
            />
            <CampoTextoFloatLabel
                label="Nome do produto"
                inputConfig={{
                    type: 'text',
                    id: 'nome',
                    name: 'nome',
                    value: produtoDados.nome,
                    onChange: evento => handleDadosChange(evento),
                }}
            />
            <CampoTextoFloatLabel
                label="Preço do produto"
                inputConfig={{
                    type: 'number',
                    id: 'preco',
                    name: 'preco',
                    value: produtoDados.preco,
                    onChange: evento => handleDadosChange(evento),
                }}
            />
            <textarea
                className={styles.descricao}
                placeholder="Descrição do produto"
                name="descricao"
                value={produtoDados.descricao}
                onChange={evento => handleDadosChange(evento)}
            ></textarea>
            <button className={styles.botao}>Adicionar produto</button>
        </form>
    )
}

export default FormularioProduto
