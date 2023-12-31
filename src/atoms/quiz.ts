import { atom } from 'jotai';

import { Quiz } from 'types/quiz';

export const quizzesJotai = atom<Quiz[]>([]);
