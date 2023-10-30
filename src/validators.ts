const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export  const validateEmail = (email: string) => {
    return EMAIL_REGEXP.test(email);
}

export  const validateUsername = (username: string) => {
    return username.length > 3 && username.length < 13;
}

export  const validateCountry = (country: string) => {
    return country.length > 0;
}

export  const validatePassword = (password: string) => {
    return password.length > 7 && password.length < 17;
}

export const validateRepeatPassword = (originalPassword: string) => (password: string) => {
    return password === originalPassword;
}
