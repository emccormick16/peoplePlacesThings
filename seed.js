const { db, Person, Place, Thing, Souvenir } = require("./db.js");

const seedDb = async () => {
  await db.sync({ force: true, logging: false });

  const moe = await Person.create({
    name: "moe",
  });
  const larry = await Person.create({
    name: "larry",
  });
  const lucy = await Person.create({
    name: "lucy",
  });
  const ethyl = await Person.create({
    name: "ethyl",
  });

  const paris = await Place.create({
    city: "paris",
  });
  const nyc = await Place.create({
    city: "nyc",
  });
  const chicago = await Place.create({
    city: "chicago",
  });
  const london = await Place.create({
    city: "london",
  });

  const hat = await Thing.create({
    gifts: "hat",
  });
  const bag = await Thing.create({
    gifts: "bag",
  });
  const shirt = await Thing.create({
    gifts: "shirt",
  });
  const cup = await Thing.create({
    gifts: "cup",
  });

  await Souvenir.create({
    personId: moe.id,
    thingId: hat.id,
    placeId: london.id,
  });
  await Souvenir.create({
    personId: moe.id,
    thingId: bag.id,
    placeId: paris.id,
  });
  await Souvenir.create({
    personId: ethyl.id,
    thingId: shirt.id,
    placeId: nyc.id,
  });
};

seedDb();
