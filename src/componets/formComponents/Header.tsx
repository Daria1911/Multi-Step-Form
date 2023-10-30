import React, { FC, ReactElement }  from "react";

interface Props  {
    stage: number;
}


function Header ({stage} : Props)  {
    return (
        <>
            <div className="form-title">
                <h1 className="form-header">Super test form</h1>
                    {stage === 1 ? <p className="form-label">Initial state</p>
                        : stage === 2 ? <p className="form-label">Password screen</p>
                            : <p className="form-label">Review</p>}
            </div>
        </>
    );
}

export default Header;
