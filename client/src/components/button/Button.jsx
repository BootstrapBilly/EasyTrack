import React, { useMemo } from 'react'
import { Button as ButtonComponent } from "@material-ui/core";

const Button = ({children, size, style, variant, onClick}) => {

    const background = useMemo(() => {
        switch(variant){
            default: return undefined;
            case "success": return "#50C878";
            case "danger": return "#FF5733";
        }
    }, [variant]);

    const height = useMemo(() => {
        switch(size){
            default: case "lg": return "h-12";
            case "sm": return "h-6";
            case "md": return "h-10";
        }
    }, [variant]);


    return (
        <ButtonComponent variant="contained" fullWidth className={`${height} shadow`} type="button" style={{background, ...style}} onClick={onClick}>
            <span className="font-medium text-white">{children}</span>
        </ButtonComponent>
    )
}

export default Button;
