/*export const API = {
    get Bank(){
        return "https://random-data-api.com/api/v2/banks"
    },
    get Beer(){
        return "https://random-data-api.com/api/v2/beers"
    },
    get Blood_types(){
        return "https://random-data-api.com/api/v2/blood_types"
    },
    get User(){
        return "https://random-data-api.com/api/v2/users"
    }
}*/

export const ENDPOINTS = {
    BASE: `https://random-data-api.com/api/v2`,
    get BANK() {
        return `${this.BASE}/banks`
    },
    get BEERS() {
        return `${this.BASE}/beers`
    },
    get BLOOD_TYPES() {
        return `${this.BASE}/blood_types`
    },
    get CREDIT_CARD() {
        return `${this.BASE}/credit_cards`
    }
}