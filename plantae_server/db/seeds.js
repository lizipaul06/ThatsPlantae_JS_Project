use garden;

db.dropDatabase();

db.plants.insertMany([
  {
    name: "Milk Thistle",
    scientific_name: "Silybum Miranium"
  }
]);
