import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Form from "../form/Form";
import Pattern from "../pattern/Pattern";

export default function Profile() {

    return(
        <section className="profile-container">
            <div>
                <h2 className="profile-h2">Create a Community Profile!</h2>
            </div>
            <Form />
        </section>
    );
}