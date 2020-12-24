import DatabaseConnection from '../database/connection'

const table = "item"
const db = DatabaseConnection.getConnection()

export default class ItemService {
    static addData(param) {
        return new Promise((resolve, reject) =>db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (name, tam_p, tam_m, tam_g, tam_gg, tam_egg, value) 
                values (?, ?, ?, ?, ?, ?, ?)`, 
                [param.name, param.tam_p, param.tam_m, param.tam_g, param.tam_gg, param.tam_egg, param.value], 
                (_, { insertId, rows }) => {
                    resolve(insertId)
                }), (sqlError) => {
                    alert(sqlError);
                }}, (txError) => {
                    alert(txError);
            }));
    }

    static totals(){
        return new Promise((resolve, reject) =>db.transaction(
            tx => {
                tx.executeSql(`SELECT COUNT(name) as products, 
                                    (SUM(tam_p) + 
                                     SUM(tam_m) +
                                     SUM(tam_g) +
                                     SUM(tam_gg) +
                                    SUM(tam_egg)) as items  
                                FROM item`, [],
                (_, { rows: { _array } }) => {
                    resolve(_array[0]);
                }), (sqlError) => {
                    alert(sqlError);
                }}, (txError) => {
                    alert(txError);
            }));
    }

    static deleteById(id) {
        db.transaction(
            tx => {
                tx.executeSql(`delete from ${table} where id = ?;`, [id], (_, { rows }) => {
            }), (sqlError) => {
                alert(sqlError);
            }}, (txError) => {
                alert(txError);
            }
        );
    }


    static updateById(param) {
        return new Promise((resolve, reject) =>db.transaction(tx => {
                tx.executeSql(`update ${table} set name = ?, tam_p = ?, tam_m = ?, tam_g = ?, tam_gg = ?, tam_egg = ?, value = ? where id = ?;`, [param.name, param.tam_p, param.tam_m, param.tam_g, param.tam_gg, param.tam_egg, param.value, param.id], () => {
                }), (sqlError) => {
                    alert(sqlError);
                }}, (txError) => {
                    alert(txError);
            }));
    }

    static findById(id) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} where id=?`, [id], (_, { rows: { _array } }) => {
                resolve(_array[0])
            }), (sqlError) => {
                alert(sqlError);
            }}, (txError) => {
                alert(txError);
        }));
    }

    static findByname(name) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} where name like %?%`, [name], (_, { rows: { _array } }) => {
                resolve(_array)
            }), (sqlError) => {
                alert(sqlError);
            }}, (txError) => {
                alert(txError);
        }));
    }

    static findAll() {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} ORDER BY name`, [], (_, { rows: { _array } }) => {
                resolve(_array)
            }), (sqlError) => {
                alert(sqlError);
            }}, (txError) => {
                alert(txError);
        }))
    }
}