const express = require('express');

const app = express();

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());

app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;

    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < numberOfKidneys; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: 'Done!'
    });
})

app.put('/', (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg: 'Updated!'
    });
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;

    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }

    return atleastOneUnhealthyKidney;
}

app.delete('/', (req, res) => {
    if (isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];

        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push(users[0].kidneys[i]);
            }
        }

        users[0].kidneys = newKidneys;
        res.json({
            newKidneys,
            msg: 'Done!'
        })
    } else {
        // res.sendStatus(411);
        res.status(411).json({
            msg: 'You have no bad kidneys'
        })
    }
})

app.listen(3000, function () {
    console.log(`server running on http://localhost:3000`);
});