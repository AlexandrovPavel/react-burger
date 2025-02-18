export type ItemTypes = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
};

export type ApiStateTypes<T = unknown> = {
    isLoading: boolean;
    hasError: boolean;
    data: T;
};
