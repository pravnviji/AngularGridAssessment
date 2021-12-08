export type TtariffDetails = {
    id: string;
    name: string;
    download: string;
    upload: string;
    otherbenefits: string[];
    amount: string;
};

export enum TtariffDetailCols {
    id = 'Id',
    name = 'Tariff Name',
    downloadhistory = 'Download / Upload History',
    otherbenefits = 'Other Benefits',
    amount = 'Amount'
}