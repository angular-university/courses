


export function confirmPassword(signup, ctrl) {

    const valid = signup.password && signup.password === ctrl.value;

    return valid ? null : {
        confirmPassword:false
    };
    
}