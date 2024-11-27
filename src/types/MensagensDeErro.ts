import { Erro } from '@/types/Erro'

export interface MensagensDeErro {
    [campo: string]: Partial<Record<Erro, string>>
}
