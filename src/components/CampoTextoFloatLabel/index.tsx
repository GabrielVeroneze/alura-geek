import styles from './CampoTextoFloatLabel.module.scss'

interface CampoTextoFloatLabelProps {
    label: string
    mask?: React.MutableRefObject<HTMLInputElement | null>
    inputConfig: {
        type: 'text' | 'number' | 'email' | 'password' | 'url'
        id: string
        name: string
        value: string | number
        onChange: (evento: React.ChangeEvent<HTMLInputElement>) => void
        onInvalid: (evento: React.FormEvent<HTMLInputElement>) => void
        onBlur: (evento: React.FocusEvent<HTMLInputElement, Element>) => void
        max?: number
        maxLength?: number
        min?: number
        minLength?: number
        pattern?: string
        required?: boolean
    }
}

const CampoTextoFloatLabel = ({ label, mask, inputConfig }: CampoTextoFloatLabelProps) => {
    return (
        <div className={styles.campo}>
            <label htmlFor={inputConfig.id}>{label}</label>
            <input ref={mask} {...inputConfig} />
        </div>
    )
}

export default CampoTextoFloatLabel
