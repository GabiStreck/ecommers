export type Product = {
    id: string
    title: string
    rating: number
    price: number
    image: Image
    color: Color
    genre: string
    trademark: TradeMark
    category: Category
}

export type Image = {
    url: string
}

export type TradeMark = {
    id: string
    name: string
}

export type Category = {
    id: string
    name: string
}

export type Color = {
    href: string
}