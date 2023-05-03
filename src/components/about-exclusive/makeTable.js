import { hours } from "./hours-info";

export function newTable() {
    let t = document.createElement('table');
    let theader = t.createTHead();
    let theaderRow = theader.insertRow();
    let td = theaderRow.insertCell();
    td.textContent = "Date";
    let td2 = theaderRow.insertCell();
    td2.textContent = "Hours";

    let format = ["date", "hours"];

    let tBody = t.createTBody();
    for(let i = 0; i < 7; i++) {
        let tb_row = tBody.insertRow();
        for (let j = 0; j < 2; j++) {
            let tbrow_td = tb_row.insertCell();
            tbrow_td.textContent = hours[i][format[j]];
        }
    }

    return t;
}