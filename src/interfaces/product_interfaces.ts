export interface Product {
    name?: string;
    setCode?: string;
    setName?: string;
    collectorNumber?: string;
    foil?: string;
    rarity?: ValidRarity;
    image?: string;
    quantity?: number;
    manaBoxID?: number;
    price?: number | null;
    condition?: ValidCondition;
    language?: ValidLanguage;
    slug?: string;
    type?: ValidTypes;
    title?: string;
    description?: string;
}

export type ValidCondition = "near_mint" | "damaged" | "low played"
export type ValidLanguage = "en" | "es" | "jp"
export type ValidTypes = "MTG" | "PKMN" | "OP" | "RB" | "FAB"
export type ValidRarity = "rare" | "common" | "uncommon" | "mythic"

export interface SeedData {
    products: Product[];
}