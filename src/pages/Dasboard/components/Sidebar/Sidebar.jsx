// Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Icon from "@mdi/react";
import {
    mdiViewDashboard,
    mdiPostOutline,
    mdiMessageBadgeOutline,
    mdiAccount
} from "@mdi/js";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
    const location = useLocation();

    const isActiveTab = path => {
        return location.pathname === path ? "active" : "";
    };

    return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3">
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="my-3">
            <Link
                activeStyle={{ color: 'white', backgroundColor: '#1250A2 !important'}}
                to="/dasboard"
                className={`nav-link ${isActiveTab(
                    "/dasboard"
                )}`}
            >
                <Icon path={mdiViewDashboard} size={1} className="mr-0" />
                Dashboard
            </Link>
            </li>
            <li className="my-3">
            <Link
                activeStyle={{ color: 'white' }}
                to="/dasboard/post"
                className={`nav-link ${isActiveTab(
                    "/dasboard/post"
                )} sidebr rounded-2 mb-2`}
            >
                <Icon path={mdiPostOutline} size={1} />
                Postingan
            </Link>
            </li>
            <li className="my-3">
            <Link
                activeStyle={{ color: 'white' }}
                to="/dasboard/pesan"
                className={`nav-link ${isActiveTab(
                    "/dasboard/pesan"
                )}`}
            >
                <Icon path={mdiMessageBadgeOutline} size={1} />
                Pesan
            </Link>
            </li>
            <li className="my-3">
            <Link
                activeStyle={{ color: 'white' }}
                to="/dasboard/profil"
                className={`nav-link ${isActiveTab(
                    "/dasboard/profil"
                )}`}
            >
                <Icon path={mdiAccount} size={1} />
                Profil
            </Link>
            </li>
        </ul>
    </div>
    );
}

export default Sidebar;
