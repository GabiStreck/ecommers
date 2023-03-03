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

type Image = {
    url: string
}

type TradeMark = {
    url: string
}

type Category = {
    url: string
}

type Color = {
    href: string
}