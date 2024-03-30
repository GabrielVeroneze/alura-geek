import styles from './CampoTexto.module.scss'

interface CampoTextoProps {
    placeholder: string
    inputConfig: {
        type: 'text' | 'email' | 'password' | 'url'
        name: string
        value: string
        onChange: (evento: React.ChangeEvent<HTMLInputElement>) => void
        onInvalid: (evento: React.FormEvent<HTMLInputElement>) => void
        onBlur: (evento: React.FocusEvent<HTMLInputElement, Element>) => void
        minLength: number
        maxLength: number
        required: boolean
    }
}

const CampoTexto = ({ placeholder, inputConfig }: CampoTextoProps) => {
    return (
        <input
            className={styles.campo}
            placeholder={placeholder}
            aria-label={placeholder}
            {...inputConfig}
        />
    )
}

export default CampoTexto
