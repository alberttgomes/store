import logoAmazon from './../assets/amazon-logo-sticker-adesivo.jpg'

export const DEFAULT_NAV_BAR_COMPONENT = {
    items: {
        logo:{
            alt: "photo logo oficial",
            photo: "",
        },
        path: {
            one: {
              link: "/diversos",
              namespace: "Diversos"
            },
            two: {
                link: "/my_store",
                namespace: "Nossos Produtos"
            }
        }
    }
};

export const DEFAULT_PRODUCT_ITEM_COMPONENT = {
    product: {
        photo: "",
        title: "Ipsum Lorem Ipsum",
        description: "Lorem Ipsum",
        price: 0,
        button: onclick
    }
};

export const PRODUCT_ITEM_AMAZON = {
    product: {
        image: logoAmazon,
        href: "https://www.amazon.com/"
    }
};