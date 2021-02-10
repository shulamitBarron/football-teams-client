export interface Team {
    id: string;
    name: string;
    founded: boolean;
    address: string;
}

export interface TeamDetails extends Team{
    icon: string;
    establishmentYear: number;
    website: string;
    players: Player[];
}

export interface Player {
    name: string;
    shirtNumber: number;
}
