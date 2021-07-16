import React, { useMemo } from 'react'
import { Button as ButtonComponent } from "@material-ui/core";

const Button = ({children, style, variant}) => {

    const background = useMemo(() => {
        switch(variant){
            default: return undefined;
            case "success": return "#ACD1AF";
            case "danger": return "#ff9b9b";
        }
    }, [variant]);

    return (
        <ButtonComponent variant="contained" fullWidth className="h-12 shadow" type="button" style={{background, ...style}}>
            {children}
        </ButtonComponent>
    )
}

export default Button;
