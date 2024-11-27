import { Erro } from '@/types/Erro'

export interface IMensagensDeErro {
    [campo: string]: Partial<Record<Erro, string>>
}
