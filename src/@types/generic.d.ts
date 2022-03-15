import type { Dispatch, SetStateAction } from 'react'

export type State<T = number, D = Dispatch<SetStateAction<T>>> = [T, D]