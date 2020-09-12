import {
    FormControl,
    FormErrorMessage, FormLabel,
    Input
} from "@chakra-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
};

// '' => false
// 'error message stuff' => true

export const InputField: React.FC<InputFieldProps> = ({
    label,
    size: _,
    ...props // 스프레드 연산자
}) => {
    const [field, { error }] = useField(props);
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <Input {...field} {...props} id={field.name} />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
};