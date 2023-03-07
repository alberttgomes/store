import React, {FC, useState, useContext} from "react";
import axios from "axios";
import "./AdminStyles.scss";
import {AdminContext} from "../../context/AdminContext";
import {PublicationContext} from "./../../context/AddPublication";

interface IPropsAdminScreen {}

const AdminScreen: FC<IPropsAdminScreen> = () => {

    const {props, setProps} = useContext(AdminContext);
    const {propsPublication, setPropsPublication} = useContext(PublicationContext);
    
    const OnSubmit = () => {
        const [response, setResponse] = useState<any>();
        
        async(url: string, payload: Object ) => {

            const response = await axios.get(url, payload);

            response !== null || undefined? 
                setProps(response.data) : undefined
                
            setResponse(response as any);
        }

        return response;
    }

    const AddPublication = () => {

        React.useEffect(() => {
            async(url: string, payload: Object ) => {

                const response = await axios.post(url, payload);

                if (response.data !== null) {
                    setPropsPublication(response.data);
                }
                else {
                    console.log(response)
                }     
            }
        }, []);
    }
    
    return props?.user.name === '' ? (
        <div className="${prefix}-main-screen-admin">
            <a href="/log_in_admin">
                <h2 className="${prefix}-h2-login-title">Log in</h2>
            </a>

            <div className="${prefix}-wrapper-form-login">
                {/* Material UI component */}
            </div>

            <div className="${prefix}-wrapper-button-login">
                <button
                    onClick={OnSubmit}
                >
                    Acessar
                </button>
            </div>
        </div>
    ) : (
        <div className="${prefix}-main-screen-admin">
                <h2>Add Publication</h2>
                <div className="${prefix}-wrapper-product-items">
                    <form>
                        <input>{propsPublication?.product.href}</input>
                        <input>{propsPublication?.product.image}</input>
                    </form>
                </div>
                <div className="${prefix}-wrapper-button-add">
                    <button
                        onClick={AddPublication}
                    >
                        Adicionar
                    </button>
                </div>
        </div>
    );
};

export default AdminScreen;