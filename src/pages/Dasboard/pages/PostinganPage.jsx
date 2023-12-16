// PostinganPage.jsx
import React from "react";
import Profil from "../components/Profil/Profil";
import CardComponent from "../../../components/molecules/Card";
import { amikom } from "../../../assets/main";

function PostinganPage() {
    return (
        <div className="container-fluid">
            <Profil/>
            <div className="row">
                <div className="col-sm-4 mb-4">
                    <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000'/>
                </div>

                <div className="col-sm-4 mb-4">
                    <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000'/>
                </div>

                <div className="col-sm-4 mb-4">
                    <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000'/>
                </div>

                <div className="col-sm-4 mb-4">
                    <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000'/>
                </div>

                <div className="col-sm-4 mb-4">
                    <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000'/>
                </div>

                <div className="col-sm-4 mb-4">
                    <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000'/>
                </div>
                
               
            </div>
        </div>
    );
}

export default PostinganPage;
