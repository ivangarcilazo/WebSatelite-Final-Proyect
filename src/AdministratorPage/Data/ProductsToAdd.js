//Contiene donde se guardan los productos

export class Products{
    constructor(title, picture, id, garment, size, price){
        this.title=title
        this.picture=picture
        this.id=id
        this.garment=garment
        this.size=size
        this.price=price
    }
}

export const newProducts=[]
