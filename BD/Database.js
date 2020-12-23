import * as SQLite from 'expo-sqlite';
import {Club} from '../BD/Club'


const db = SQLite.openDatabase("database.db");

export default class DatabaseManager {
  

    //initialisation de la base de données
    static initializeDatabase(): void {
        db.transaction(tx => {
            tx.executeSql
            (
                "create table if not exists table club ( club_id integer primary key autoincrement not null,text text not null);"
            );
        }, (e) => { console.log("ERREUR + " + e) },
            () => { console.log("OK + ") }
        );
    }


    static ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
        db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                resolve(results);
            },
                (error) => {
                    reject(error);
                });
        });
    });

    static async getAllClubs() {

        let result: Club[] = [];
        let selectQuery = await this.ExecuteQuery("SELECT * FROM club", []);
        
        var rows = selectQuery.rows;
        for (let i = 0; i < rows.length; i++) {
            var item = rows.item(i);
            result.push({
                text: item.text,
                id: item.note_id
            } as INote);
        }
    
        return result;
    }

    static async createNote(note: string) {
        await this.ExecuteQuery("insert into note(text) values(?)", [note]);
    }

    static async deleteNoteWithId(id: number) {
        await this.ExecuteQuery("DELETE FROM note WHERE note_id=?", [id]);
    }

}