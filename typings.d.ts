type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

export interface IData {
    books?: Book[]
    posts?: Post[]
    hymns?: Hymn[]
}
export interface IDb {
    books?: Book[]
    posts?: Post[]
    hymns?: Hymn[],
    categories?: Category[],
    authors?: Author[]
}
export interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
    estimatedReadingTime?: string
}

export interface Book extends Base {
    title: string;
    slug: Slug;
    author: Author;
    mainImage: Image[];
    price: string
    description: string;
}

export interface Hymn extends Base {
    title: string;
    slug: Slug;
    number: number
    mainImage: Image;
    notes: [Image];
    link: string;
    author: Author;
}

export interface Author extends Base {
    bio: string,
    image: Image,
    title: string,
    slug: Slug
}

interface Image {
    _type: "image",
    asset: Reference
}

interface Reference {
    _ref: string,
    _type: "reference"
}

interface Slug {
    _type:  "slug",
    current: string
}

interface Block {
    _key: string,
    _type: "block",
    children: Span[],
    markDefs: any[],
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}

interface Span {
    _key: string,
    _type: "span"
    marks: string[],
    text: string
}

interface Category extends Base {
    description: string,
    title: string
}

interface MainImage {
    _type: "image",
    asset: Reference
}

interface Title {
    _type: "string",
    current: string
}