const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async db => {
    await saveOrphanage(db, {
            lat: "-23.5467663",
            lng: "-46.8874097",
            name: "Crianca Esperanca",
            about: "Presta asistencia a criancas de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            whatsapp: "11946291234",
            images: ["https://images.unsplash.com/photo-1602424847711-2d2e831afc5d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

            "https://images.unsplash.com/photo-1602004770766-4a5dbc82f3e0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
            opening_hours: "Horario de visitas Das 18h até 8h",
            open_on_weekends: "0"
    })


//consultar dados na tabela
const selectedOrphanages = await db.all("SELECT * FROM orphanages")
console.log(selectedOrphanages)

/*const orphanage = await db.all('SELECT * FROM orphanages WHERE id="4"')
console.log(orphanage)
*/

//deletar dado da tabela
/*console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
//deletar dado da tabela
console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
*/
})