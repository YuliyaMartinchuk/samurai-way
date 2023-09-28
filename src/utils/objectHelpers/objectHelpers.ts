
export const updateObjectInArray = <T extends { [key: string]: any }>(
    items: T[],
    itemId: any,
    objPropName: keyof T,
    newObjProps: Partial<T>
): T[] => {
    return items.map((item) =>
        item[objPropName] === itemId ? {...item, ...newObjProps} : item
    );
}