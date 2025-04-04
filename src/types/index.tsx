export type UserType = {
    email: string;
    password: string;
    name: string;
};

export type UserTypeWithoutPassword = Omit<UserType, "password">;

export type ItemType = {
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

export type ItemTypeWithId = { id: "string" } & ItemType;

export type ApiStateType<T = unknown> = {
    isLoading: boolean;
    hasError: boolean;
    data: T;
};

export type ApiResponseDataType<T = unknown> = {
    data: T;
    success: string;
};

export type CookieProps = {
    expires?: number | Date | string;
    path?: string;
    domain?: string;
    secure?: boolean;
    SameSite?: "Strict" | "Lax" | "None";
};
