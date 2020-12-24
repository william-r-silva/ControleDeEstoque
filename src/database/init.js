import DatabaseConnection from './connection'

var db = null
export default class DatabaseInit {

    constructor() {
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false );

        var sql = [
            `create table if not exists item (
                id integer primary key autoincrement,
                name varchar(255) not null unique,
                tam_p integer,
                tam_m integer,
                tam_g integer,
                tam_gg integer,
                tam_egg integer,
                value decimal(2,2) not null
            );`,
            `create table if not exists image (
                id integer primary key autoincrement,
                url varchar(255) not null,
                item_id integer,
                foreign key (item_id) references item (id)
            );`,
            `create table if not exists ticket (
                id integer primary key autoincrement,
                create_date date,
                status_pago boolean default false,
                value decimal(2,2) default 0
            );`
            // ,
            // `create table if not exists itemToPay (
            //     id integer primary key autoincrement,
            //     tam_p integer,
            //     tam_m integer,
            //     tam_g integer,
            //     tam_gg integer,
            //     tam_egg integer,
            //     item_id integer,
            //     foreign key (item_id) references item (id),  
            //     ticket_id integer not null,
            //     foreign key (ticket_id) references ticket (id)
            // );`,
            // `insert into ticket ( null, null, null, null);`
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                alert("error call back : " + JSON.stringify(error));
                alert(error);
            }
        );
    }

}