export interface Itask {
  id: number;
  task: string;
  description: string;
  state: string;
  userId: number;
}
export enum state {
  active = 'ACTIVE',
  completed = 'COMPLETED',
}
