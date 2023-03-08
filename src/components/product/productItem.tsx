import React, { FC } from "react";

interface IPropsProductItem {
    product: {
        photo: string,
        title: string,
        description: string,
        price: number,
        path: string,
        button: () => void
    }
}

const ProductItem: FC<IPropsProductItem> = ({ product }) => {

    const onSubmitProduct = () => {};

    return(
        <div className="${prefix}-main-product-item">
            <a href={product.path} target='_blank'>
                <header className="${prefix}-header-wrapper-item">
                    <img
                        alt="image product"
                        src={product.photo}
                        className="${prefix}-img-wrapper-item"
                    />
                </header>
                <main className="${prefix}-main-wrapper-item">
                    <h3 className="${prefix}-title-wrapper-item">
                        {product.title}
                    </h3>
                    <p className="${prefix}-description-wrapper-item">
                        {product.description}
                    </p>
                </main>
                <footer className="${prefix}-footer-wrapper-item">
                    <div className="${prefix}-grid-footer-content">
                        <div className="${prefix}-price-item">
                            <p>{product.price}</p>
                        </div>
                        <div className="${prefix}-button-wrapper-buy">
                            <button
                                onClick={onSubmitProduct}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </footer>
            </a>
        </div>
    );
};

export default ProductItem;