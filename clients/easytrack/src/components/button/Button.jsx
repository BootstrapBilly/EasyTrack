import React, { useMemo } from 'react'
import { Button as ButtonComponent } from "@material-ui/core";

const Button = ({children, className, size, style, variant, onClick}) => {

    const styling = useMemo(() => {
        switch(variant){
            default: return undefined;
            case "success": return {background: "#50C878", color: "white"};
            case "brand": return {background: "#3f51b5", color: "white"};
            case "danger": return {background: "#FF5733", color: "white"};
            case "danger-outline": return {boxShadow: "0px 0px 3px #FF5733", background: "transparent", color: "#FF5733", fontWeight: 400};
        }
    }, [variant]);

    const height = useMemo(() => {
        switch(size){
            default: case "lg": return "h-12";
            case "sm": return "h-6";
            case "md": return "h-8";
        }
    }, [size]);

    return (
        <div className={`${className} w-full`}>
            <ButtonComponent 
                variant="contained" 
                fullWidth 
                className={`${height} shadow`} 
                type="button" s
                style={{fontWeight: 500, ...styling, ...style}} 
                onClick={onClick} data-testid="button">
                {children}
            </ButtonComponent>
        </div>
    )
}

export default Button;
