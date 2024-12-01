import styles from './CampoTexto.module.scss'

interface CampoTextoProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const CampoTexto = ({ ...atributos }: CampoTextoProps) => {
    return (
        <input
            className={styles.campo}
            {...atributos}
        />
    )
}

export default CampoTexto
