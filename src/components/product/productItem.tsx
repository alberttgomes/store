import React, { FC } from "react";

interface IPropsProductItem {
    product: {
        photo: string,
        title: string,
        description: string,
        price: number,
        button: () => void
    }
}

const ProductItem: FC<IPropsProductItem> = ({ product }) => {
    return(
        <div className="${prefix}-main-product-item">
            <header className="${prefix}-header-wrapper-item">
                <img
                    alt="image product"
                    src=""
                    className="${prefix}-img-wrapper-item"
                />
            </header>
            <main className="${prefix}-main-wrapper-item">
                <h3 className="${prefix}-title-wrapper-item"></h3>
                <p className="${prefix}-description-wrapper-item"></p>
            </main>
            <footer className="${prefix}-footer-wrapper-item">
                <div className="${prefix}-grid-footer-content">
                    <div className="${prefix}-price-item"></div>
                    <div className="${prefix}-button-wrapper-buy">
                        <button></button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProductItem;