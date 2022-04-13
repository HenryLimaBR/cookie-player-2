import type { Dispatch, SetStateAction } from 'react'

export type State<T = any, D = Dispatch<SetStateAction<T>>> = [T, D]
