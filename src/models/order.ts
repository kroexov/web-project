import { IDetail } from "./detail"

export interface IOrder{
    userId : string
    providerId : string
    timeLife : number
    countOfControlPoints : number
    typeOfRaw : string
    locationForSearch : string
    date : number
    limitOfCost : number
    detailName : string // need to receive from state
    detailAmount : number
    Comment : string

    detail : IDetail
}