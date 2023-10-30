import React, {FC, useState} from "react";
import {FormData} from "../Formdata.types";
import FormStage from "../FormStage";

interface ReviewProps {
    userInfo: Partial<FormData>;
}

const Review: FC<ReviewProps> = ({ userInfo }) => {
    return (
            <FormStage fields={[]} updateStep={() => {}}>
                <div className="form-review">
                    <p>Username</p>
                    <p className="review-data">{userInfo.userName}</p>
                </div>
                <div className="form-review">
                    <p>Email</p>
                    <p className="review-data">{userInfo.email}</p>
                </div>
                <div className="form-review">
                    <p>Country</p>
                    <p className="review-data">{userInfo.country}</p>
                </div>
            </FormStage>
    );
}
export default Review;


