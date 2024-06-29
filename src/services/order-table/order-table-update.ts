import {OrderTable,
    OrderTableActionType,
    OrderTableActions,
    Insert as OrderTableInsertAction,
    Delete as OrderTableDeleteAction,
    Update as OrderTableUpdateAction,
    Move as OrderTableMoveAction,
} from "../../types/order-table";

const insertData = (table: OrderTable, action: OrderTableInsertAction): OrderTable => {
    return [
        ...table.slice(0, action.data.pos),
        ...action.data.rows,
        ...table.slice(action.data.pos),
    ]
}

const deleteData = (table: OrderTable, action: OrderTableDeleteAction): OrderTable => {
    return table.filter(({id}) => !action.data.includes(id));
}

const updateData = (table: OrderTable, action: OrderTableUpdateAction): OrderTable => {
    return table.map(row => {
        const index = action.data.findIndex((updatedRow) => updatedRow.id === row.id);
        if (index !== -1) {
            return action.data[index];
        }
        return row;
    })
}

const moveData = (prevTable: OrderTable, action: OrderTableMoveAction): OrderTable => {
    const table = [...prevTable];
    action.data.forEach((move) => {
        table.splice(move.to, 0, table.splice(move.from, 1)[0]);
    });
    return table;
}

export const orderTableUpdate = (prevTable: OrderTable, actions: OrderTableActions): OrderTable => {
    let table = prevTable;
    actions.forEach((action) => {
        switch (action.type) {
            case OrderTableActionType.DATA:
                table = action.data;
                break;
            case OrderTableActionType.INSERT:
                table = insertData(table, action);
                break;
            case OrderTableActionType.DELETE:
                table = deleteData(table, action);
                break;
            case OrderTableActionType.UPDATE:
                table = updateData(table, action);
                break;
            case OrderTableActionType.MOVE:
                table = moveData(table, action);
                break;
        }
    });
    return table;
}

