import { errorMessages } from "./errorMessages";

export const validateEmail = (value) => {
    const emptyField = required(value) ;
    if(!emptyField){
        const regex = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

        if(!regex.test(value.trim())){
            return errorMessages.INVALID_EMAIL ;
        }
        return null;
    }
    return emptyField ;
}

export const validatePassword = (value) => {
    const emptyField = required(value) ;
    if(!emptyField){
        const regex = new RegExp(/(?=.*\d)(?=.*[A-Z])(?=.*\W)/);
        if(!regex.test(value.trim())){
            return errorMessages.INVALID_PASSWORD ;
        }
        return null;
    }
    return emptyField ;
}

export const validateconfirmPassword = (value, password) => {
    const emptyField = required(value) ;
    if(!emptyField){
        return password === value ? null : errorMessages.INVALID_CONFIRMATION_PASSWORD
    }
    return emptyField ;
}

const required = (value) =>{
    if(!value || value.lenght < 1) {
        return errorMessages.REQUIRED
    }
    return null ;
}