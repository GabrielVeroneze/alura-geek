import styles from './CampoTextoFloatLabel.module.scss'

interface CampoTextoFloatLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    mask?: React.MutableRefObject<HTMLInputElement | null>
}

const CampoTextoFloatLabel = ({ label, mask, id, ...atributos }: CampoTextoFloatLabelProps) => {
    return (
        <div className={styles.campo}>
            <label htmlFor={id}>{label}</label>
            <input ref={mask} {...atributos} />
        </div>
    )
}

export default CampoTextoFloatLabel
