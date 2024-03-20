import { customAlphabet } from 'nanoid'

export const obterId = () => {
    const nanoid = customAlphabet('1234567890', 7)

    return Number(nanoid())
}
