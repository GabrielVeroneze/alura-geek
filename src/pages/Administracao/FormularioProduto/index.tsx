import CampoTextoFloatLabel from '@/components/CampoTextoFloatLabel'
import styles from './FormularioProduto.module.scss'

const FormularioProduto = () => {
    return (
        <form className={styles.formulario}>
            <h2 className={styles.titulo}>Adicionar novo produto</h2>
            <CampoTextoFloatLabel
                label="URL da imagem"
                inputConfig={{
                    type: 'url',
                    id: 'imagem',
                    name: 'imagem',
                }}
            />
            <CampoTextoFloatLabel
                label="Categoria"
                inputConfig={{
                    type: 'text',
                    id: 'categoria',
                    name: 'categoria',
                }}
            />
            <CampoTextoFloatLabel
                label="Nome do produto"
                inputConfig={{
                    type: 'text',
                    id: 'nome',
                    name: 'nome',
                }}
            />
            <CampoTextoFloatLabel
                label="Preço do produto"
                inputConfig={{
                    type: 'number',
                    id: 'preco',
                    name: 'preco',
                }}
            />
            <textarea
                className={styles.descricao}
                placeholder="Descrição do produto"
            ></textarea>
            <button className={styles.botao}>Adicionar produto</button>
        </form>
    )
}

export default FormularioProduto
