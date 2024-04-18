export const validateNewAccount = (user) => {
    const validate = {
        isValid: false,
        errors: {},
    }
    if (!(user.email && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email.trim()))) {
        validate.errors.email = '*enter correct email';
    }
    if (!(user.password && /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(user.password.trim()) && user.password.length >= 8)) {
        validate.errors.password = '*password should be alphanumeric'
    }
    if (!(user?.confirmPassword === user?.password)) {
        validate.errors.confirmPassword = "*didn't matched"
    }

    if (Object.entries(validate.errors).length === 0) {
        validate.isValid = true
    }
    return validate;
}
export const validateSignIn = (user) => {
    const validate = {
        isValid: false,
        errors: {},
    }
    if (!(user.email && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email.trim()))) {
        validate.errors.email = '*enter correct email';
    }
    if (!(user.password && /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(user.password.trim()) && user.password.length >= 8)) {
        validate.errors.password = '*password should be alphanumeric'
    }
     if (Object.entries(validate.errors).length === 0) {
        validate.isValid = true
    }
    return validate;
}


