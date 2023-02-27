export const serializeNonPOJOs = (obj: object) => {
    console.log('serializeNonPOJOs');
    return structuredClone(obj);
}