import axios from "axios";
import React, { FC } from "react";

interface IPropsProductItem {
    action: {
        type: string
    }
    product: {
        photo: string,
        title: string,
        description: string,
        price: number,
        path: string,
    },
};

const ProductItem: React.FC <IPropsProductItem> = ({ product }) => {
    let messageSuccess: string | Element | null;
    let messageError: string | Element | null;

    const onSubmitProduct = () => {
        async (url: string, payload: any): Promise<void> => {
            const response = await axios.post(url, JSON.stringify(payload));

            if (response.data !== null) {
                messageSuccess = document.querySelector('.message-success');
            }
            else {
                messageError = document.querySelector('.message-error');
            }
        }

        return messageSuccess as string !== '' ? messageSuccess : messageError;
    };

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