import { useParams } from 'react-router-dom'
import { useFormularioProduto } from '@/hooks/useFormularioProduto'
import { useValidacaoProduto } from '@/hooks/useValidacaoProduto'
import CampoTextoFloatLabel from '@/components/CampoTextoFloatLabel'
import MensagemErro from '@/components/MensagemErro'
import styles from './FormularioProduto.module.scss'

const FormularioProduto = () => {
    const { id } = useParams()
    const { produtoDados, handleDadosChange, handleSubmit, mascaraMonetaria } = useFormularioProduto()
    const { erros, validarCampo, validarFormulario } = useValidacaoProduto()

    return (
        <form
            className={styles.formulario}
            onSubmit={evento => handleSubmit(evento, id)}
            onInvalid={evento => validarFormulario(evento.target)}
        >
            <h2 className={styles.titulo}>
                {id ? 'Editar produto' : 'Adicionar novo produto'}
            </h2>
            <fieldset>
                <CampoTextoFloatLabel
                    label="URL da imagem"
                    type="url"
                    id="imagem"
                    name="imagem"
                    value={produtoDados.imagem}
                    onChange={evento => handleDadosChange(evento)}
                    onInvalid={evento => evento.preventDefault()}
                    onBlur={evento => validarCampo(evento.target)}
                    pattern=".+\.(png|jpg)"
                    required={true}
                />
                {erros.imagem && (
                    <MensagemErro>{erros.imagem}</MensagemErro>
                )}
            </fieldset>
            <fieldset>
                <CampoTextoFloatLabel
                    label="Categoria"
                    type="text"
                    id="categoria"
                    name="categoria"
                    value={produtoDados.categoria}
                    onChange={evento => handleDadosChange(evento)}
                    onInvalid={evento => evento.preventDefault()}
                    onBlur={evento => validarCampo(evento.target)}
                    required={true}
                />
                {erros.categoria && (
                    <MensagemErro>{erros.categoria}</MensagemErro>
                )}
            </fieldset>
            <fieldset>
                <CampoTextoFloatLabel
                    label="Nome do produto"
                    type="text"
                    id="nome"
                    name="nome"
                    value={produtoDados.nome}
                    onChange={evento => handleDadosChange(evento)}
                    onInvalid={evento => evento.preventDefault()}
                    onBlur={evento => validarCampo(evento.target)}
                    maxLength={20}
                    minLength={3}
                    required={true}
                />
                {erros.nome && (
                    <MensagemErro>{erros.nome}</MensagemErro>
                )}
            </fieldset>
            <fieldset>
                <CampoTextoFloatLabel
                    label="Preço do produto"
                    mask={mascaraMonetaria}
                    type="text"
                    id="preco"
                    name="preco"
                    value={produtoDados.preco}
                    onChange={evento => handleDadosChange(evento)}
                    onInvalid={evento => evento.preventDefault()}
                    onBlur={evento => validarCampo(evento.target)}
                    min={0}
                    required={true}
                />
                {erros.preco && (
                    <MensagemErro>{erros.preco}</MensagemErro>
                )}
            </fieldset>
            <fieldset>
                <textarea
                    className={styles.descricao}
                    placeholder="Descrição do produto"
                    name="descricao"
                    value={produtoDados.descricao}
                    onChange={evento => handleDadosChange(evento)}
                    onInvalid={evento => evento.preventDefault()}
                    onBlur={evento => validarCampo(evento.target)}
                    maxLength={150}
                    minLength={10}
                    required
                ></textarea>
                {erros.descricao && (
                    <MensagemErro>{erros.descricao}</MensagemErro>
                )}
            </fieldset>
            <button className={styles.botao}>
                {id ? 'Editar produto' : 'Adicionar produto'}
            </button>
        </form>
    )
}

export default FormularioProduto
