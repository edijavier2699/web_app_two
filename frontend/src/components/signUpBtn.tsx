import React from "react";
import { Button } from "./ui/button";

// Interfaz para definir los tipos de las props del componente
interface MyButtonProps {
    label: string; // Propiedad para el texto del botón
    parentMethod: () => void; // Propiedad para la función que se ejecutará al hacer clic
    personalizedStyles?: string
}

export const MyButton: React.FC<MyButtonProps> = ({ label, parentMethod ,personalizedStyles}) => {
    return (
        <Button 
            className={personalizedStyles}
            onClick={parentMethod}>
            {label}
        </Button>
    );
};
