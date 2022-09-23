let nameUser=JSON.parse(localStorage.getItem('nameUser'))

export class CartProducts{
    constructor(picture, title, size, price, id){
        this.pictureCart=picture
        this.titleCart=title
        this.sizeCart=size
        this.priceCart=price
        this.idElement=id
    }
    setItemsCart(){
        userDataCart.push(new CartProducts(this.pictureCart, this.titleCart, this.sizeCart, this.priceCart, this.idElement))
        localStorage.setItem(`cartOf${nameUser}`, JSON.stringify(userDataCart))
    }
}
export const userDataCart=[]

