import styles from './CampoTexto.module.scss'

interface CampoTextoProps {
    modelo: 'no-label' | 'float-label'
    inputConfig: {
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
    labelConfig?: {
        label: string
        htmlFor: string
    }
}

const CampoTexto = ({ modelo, inputConfig, labelConfig }: CampoTextoProps) => {
    return (
        <>
            {modelo === 'no-label' && (
                <input className={styles.noLabel} {...inputConfig} />
            )}
            {modelo === 'float-label' && (
                <div className={styles.floatLabel}>
                    <label htmlFor={labelConfig?.htmlFor}>
                        {labelConfig?.label}
                    </label>
                    <input {...inputConfig} />
                </div>
            )}
        </>
    )
}

export default CampoTexto
