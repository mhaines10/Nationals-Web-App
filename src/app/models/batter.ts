import {BatterStats} from './batterStats';
export interface Batter {
    firstName: string;
    lastName: string;
    position: string;
    playerId: string;
    stats?: BatterStats;
}