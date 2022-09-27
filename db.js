const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/acme_people_place_things");

const Person = db.define("person", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

const Place = db.define("place", {
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Thing = db.define("thing", {
  gifts: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Souvenir = db.define("souvenir", {});

Person.hasMany(Souvenir);
Souvenir.belongsTo(Person);

Thing.hasMany(Souvenir);
Souvenir.belongsTo(Thing);

Place.hasMany(Souvenir);
Souvenir.belongsTo(Place);

module.exports = { db, Person, Place, Thing, Souvenir };
