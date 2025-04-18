export type CreateRecord = {

    name: string;
    father_name?: string;
    mother_name: string;
    birth_date?: Date;
    avatar: string;
}

export type UpdateRecord = {
    name: string;
    father_name?: string;
    mother_name: string;
    birth_date?: Date;
    avatar: string;
}

export interface Record {
    name: string;
    father_name: string;
    mother_name: string;
    birth_date: Date;
    avatar: string;
}


