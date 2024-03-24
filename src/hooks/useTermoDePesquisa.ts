import { useRecoilState } from 'recoil'
import { termoDePesquisaAtom } from '@/state/atoms'

export const useTermoDePesquisa = () => {
    const [termo, setTermo] = useRecoilState(termoDePesquisaAtom)

    return {
        termo,
        setTermo,
    }
}
