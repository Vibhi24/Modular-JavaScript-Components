export const generateUniqueId = (p) => {
    const prefix = p;
    if(prefix){
        return prefix + "_" + Date.now();
    }
    return Date.now();
}
