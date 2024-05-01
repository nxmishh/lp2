const sbmt = document.getElementById('sbmt');
sbmt.onclick = function() {
    const first = document.getElementById('one').value;
    const firstdetails = first.split('#');
    const r1 = parseInt(firstdetails[0]);
    const c1 = parseInt(firstdetails[1]);
    let startval1 = parseInt(firstdetails[2]);

    const second = document.getElementById('two').value;
    const seconddetails = second.split('#');
    const r2 = parseInt(seconddetails[0]);
    const c2 = parseInt(seconddetails[1]);
    let startval2 = parseInt(seconddetails[2]);

    const content = document.getElementById('content');
    content.innerHTML = ""

    const table1 = document.createElement('table');
    const caption1 = document.createElement('caption');
    caption1.textContent = 'Table 1';
    table1.appendChild(caption1);

    for (let i = 1; i <= r1; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < c1; j++) {
            let col = document.createElement('td');
            col.innerHTML = (startval1+j)*i;
            row.appendChild(col);
        }
        table1.appendChild(row);
    }

    content.appendChild(table1);




    const table2 = document.createElement('table');
    const caption2 = document.createElement('caption');
    caption2.textContent = 'Table 2';
    table2.appendChild(caption2);


    for (let i = 1; i <= r2; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < c2; j++) {
            let col = document.createElement('td');
            col.innerHTML = (startval2+j)*i;
            row.appendChild(col);
        }
        table2.appendChild(row);
    }

    content.appendChild(table2);



    if(r1 === r2 && c1 === c2){
        const table3 = document.createElement('table');
        const caption3 = document.createElement('caption');
        caption3.textContent = 'Table 3';
        table3.appendChild(caption3);

        for(let i=1; i<= r1; i++){
            let row = document.createElement('tr');
            for (let j = 0; j < c2; j++) {
                let col = document.createElement('td');
                if((startval2+j)*i === (startval1+j)*i){
                    col.innerHTML = (startval2+j)*i;
                    row.appendChild(col);
                }
                else{
                    col.innerHTML = ((startval2+j)*i)*((startval1+j)*i);
                    row.appendChild(col);
                }
            }
            table3.appendChild(row)
        }

        content.appendChild(table3);
    }
};
