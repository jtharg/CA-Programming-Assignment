const express = require('express');
const { get } = require('http');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static(path.join(__dirname)));
app.set('view engine', 'ejs');
const dbPath = path.join(__dirname, '..', 'database.db');
const db = new sqlite3.Database(dbPath);

app.get('/', async(req, res) => {
  try{
    const animals = await getAnimals()
    res.render('index', {error: null, animals: animals, animalData: null});

  } catch (error){
    res.render('index', {error: error, animals: null, animalData: null});
  }
});

function getAnimals() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Animals', (err, rows) => {
      if (err) {
        reject(new Error("Internal Server error - 500 error. Please try again later."));
      } else {
        const animalData = rows.map(row => {
          return {
            animalId: row.animal_id,
            name: row.animal_name,
            description: row.animal_description
          };
        });
        resolve(animalData);
      }
    });
  });
}

app.get('/favicon.ico', (req, res) => {
  res.status(204);
});

app.get('/:id', async (req, res) => {
  try {
    const animals = await getAnimals();
    const animalId = req.params.id;
    if (animalId) {
      db.get('SELECT * FROM Animals WHERE animal_id = ?', [animalId], (err, row) => {
        if (err) {
          res.render('index', { error: "Internal Server error - 500 error. Please try again later.", animalData: null, animals: animals });
        } else if (!row) {
          res.render('index', { error: "Animal not Found - 404 error. Please select a valid animal.", animalData: null, animals: animals });

        } else {
          const animalData = {
            animalId: animalId,
            name: row.animal_name,
            description: row.animal_description
          };
          res.json({ animalData });
        }
      });
    } else {
      res.render('index', { error: null, animalData: null, animals: animals });
    }
  } catch (error) {
    console.error(error);
    res.render('index', { error: error, animalData: null, animals: animals });
  }
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});