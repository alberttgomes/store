import React, {FC, useState} from "react";
import axios from "axios";
import "./AdminStyles.scss";

interface IPropsAdminScreen {}

const AdminScreen: FC<IPropsAdminScreen> = () => {
    
    const OnSubmit = () => {
        const [response, setResponse] = useState<any>();
        
        async(url: string, payload: Object ) => {

            const response = await axios.get(url, payload);

            setResponse(response as any);
        }

        return response;
    }
    
    return(
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
    );
};

export default AdminScreen;