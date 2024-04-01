import styles from './CampoTextoFloatLabel.module.scss'

interface CampoTextoFloatLabelProps {
    label: string
    inputConfig: {
        type: 'text' | 'number' | 'email' | 'password' | 'url'
        id: string
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

const CampoTextoFloatLabel = ({ label, inputConfig }: CampoTextoFloatLabelProps) => {
    return (
        <div className={styles.campo}>
            <label htmlFor={inputConfig.id}>{label}</label>
            <input {...inputConfig} />
        </div>
    )
}

export default CampoTextoFloatLabel
