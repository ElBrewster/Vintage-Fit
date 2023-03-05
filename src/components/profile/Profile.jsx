import React from "react";
import "./Profile.scss";
import Form from "../form/Form";

export default function Profile() {
    return(
        <section className="profile-container">
            <h2 className="profile-h2">I love sewing!</h2>
            <Form />
        </section>
    );
}