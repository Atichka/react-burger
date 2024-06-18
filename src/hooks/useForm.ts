import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";

type TUseForm<T> = {
    values: T;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    setValues: Dispatch<SetStateAction<T>>;
}

export const useForm = <T>(inputValues: T): TUseForm<T> => {
    const [values, setValues] = useState<T>(inputValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name}: { value: string; name: string } = event.target;
        setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}
