/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "oqm3mj1lpw0hipo",
    "created": "2024-02-25 18:37:30.846Z",
    "updated": "2024-02-25 18:37:30.846Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xqwsltma",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lgubk4rg",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "notStarted",
            "started",
            "inProgress",
            "almostFinished",
            "done",
            "ongoing",
            "onHold",
            "archived"
          ]
        }
      },
      {
        "system": false,
        "id": "ajwqzpjl",
        "name": "created_by",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("oqm3mj1lpw0hipo");

  return dao.deleteCollection(collection);
})
