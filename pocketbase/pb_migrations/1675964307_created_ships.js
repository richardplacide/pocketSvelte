migrate((db) => {
  const collection = new Collection({
    "id": "0ptw34u4qlodsg1",
    "created": "2023-02-09 17:38:27.252Z",
    "updated": "2023-02-09 17:38:27.252Z",
    "name": "ships",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xpjwrnj5",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "3j6rgfeq",
        "name": "type",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xjiks9cv",
        "name": "class",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "frigate",
            "destroyer",
            "cruiser",
            "battleship"
          ]
        }
      },
      {
        "system": false,
        "id": "s3nsrphf",
        "name": "race",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Amarr",
            "Caldari",
            "Gallente",
            "Minmatar"
          ]
        }
      },
      {
        "system": false,
        "id": "juududnm",
        "name": "exp_level",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0ptw34u4qlodsg1");

  return dao.deleteCollection(collection);
})
