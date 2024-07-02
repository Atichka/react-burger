import React, {ReactNode} from "react";

export type TModal = {
    onClose: () => void;
    title?: string;
    children: ReactNode;
};

export type TModalOverlay = {
    onClose: () => void;
}

export type TBurgerConstructor = {
    id?: string;
    _id: string;
    name: string;
    type: string;
    image: string;
    price: number;
    uuid?: string;
    nanoid?: string;
    calories: number;
    proteins: number;
    fat: number;
    carbohydrates: number;
}

export type TCard = {
    image: string;
    price: number;
    name: string;
    id: string;
    type: string;
}

export type TProtected = {
    onlyUnAuth?: boolean;
    component: React.JSX.Element;
}

export type TComponent = {
    component: React.JSX.Element;
};

export type TConstructorItem = {
    id: string;
    moveCard?: (dragIndex: number, hoverIndex: number) => void;
    index?: number;
    type: string;
    text: string;
    price: number;
    image: string;
    isLocked: boolean;
    deleteIngredient?: (id: string) => void;
}

export type TUser = {
    name: string;
    email: string;
    password?: string;
};

export type AuthResponse = {
    user: Omit<TUser, 'password'>;
    accessToken: string;
    refreshToken: string;
}

export type Credentials =  {
    accessToken: string;
    refreshToken: string;
}

export type TOrder = {
    _id: string;
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    ingredients: string[];
};

export type TOrderCard = {
    order: TOrder;
};

export type TImages = {
    image: string;
    name: string;
};

export type TOrders = {
    orders: TOrder[];
    success: boolean;
    total: number;
    totalToday: number;
};
