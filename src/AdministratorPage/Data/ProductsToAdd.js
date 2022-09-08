//Contiene donde se guardan los productos

export class Products{
    constructor(picture, id, garment, size, price){
        this.picture=picture
        this.id=id
        this.garment=garment
        this.size=size
        this.price=price
    }
}

export const newProducts=[]
