import ListOrders from "../../components/list-orders/ListOrders";
import { ListOrdersItem } from "../../components/list-orders/components/list-orders-item/ListOrdersItem";
import ProgressOrders from "../../components/progress-orders/ProgressOrders";
import { useAppSelector } from "../../services/store";
import { ClipLoader } from "react-spinners";
import { useAppDispatch } from "../../services/store";
import { connect, disconnect } from "../../services/slices/orderSlice";
import React from "react";

export default function Feed() {
    const { data, status } = useAppSelector((state) => state.order);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(connect("wss://norma.nomoreparties.space/orders/all"));

        return () => {
            dispatch(disconnect());
        };
    }, []);

    if (status === "error") {
        return <div>Ошибка при загрузке заказов</div>;
    }

    if (data?.orders?.length && status === "connected") {
        return (
            <>
                <ListOrders
                    title="Лента заказов"
                    wrapProps={{
                        style: {
                            height: "calc(100% - 100px)",
                            paddingRight: 36,
                        },
                    }}
                >
                    {data.orders.map((item) => (
                        <ListOrdersItem key={item._id} {...item} />
                    ))}
                </ListOrders>
                <ProgressOrders
                    total={data.total}
                    totalToday={data.totalToday}
                    orders={data.orders}
                />
            </>
        );
    }

    return (
        <ClipLoader
            size={150}
            color="#4C4CFF"
            cssOverride={{ margin: "0 auto", borderWidth: "5px" }}
        />
    );
}
