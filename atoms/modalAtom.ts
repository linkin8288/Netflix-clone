// import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { Movie } from '../typings'

// modal
export const modalState = atom({
  key: 'modalState',
  default: false,
})

// Movie
export const movieState = atom<Movie | null>({
  key: 'movieState',
  default: null,
})