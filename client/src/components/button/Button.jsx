import React, { useMemo } from 'react'
import { Button as ButtonComponent } from "@material-ui/core";

const Button = ({children, style, variant, onClick}) => {

    const background = useMemo(() => {
        switch(variant){
            default: return undefined;
            case "success": return "#50C878";
            case "danger": return "#FF5733";
        }
    }, [variant]);

    return (
        <ButtonComponent variant="contained" fullWidth className="h-12 shadow" type="button" style={{background, ...style}} onClick={onClick}>
            <span className="font-medium text-white">{children}</span>
        </ButtonComponent>
    )
}

export default Button;
