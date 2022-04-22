const UUID = require("uuid-mongodb");

const arr = [];
for (let i = 0; i < 96; ++i) arr.push(i);

const key = Buffer.from(arr);

exports.keyVaultNamespace = "keys.datakeys";
exports.kmsProviders = { local: { key } };

const uuidKey = "15087F3C-32DD-4A71-962A-0888AC2F85D3";
const algorithmRandom = "AEAD_AES_256_CBC_HMAC_SHA_512-Random";
const algorithmDeterministic = "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic";

const encryptTypeStr = {
  encrypt: {
    keyId: [UUID.from(uuidKey)],
    bsonType: "string",
    algorithm: algorithmDeterministic,
  },
};

const encryptTypeArr = {
  encrypt: {
    keyId: [UUID.from(uuidKey)],
    bsonType: "array",
    algorithm: algorithmRandom,
  },
};

exports.schemaMap = {
  "test.items": {
    bsonType: "object",
    properties: {
      title: encryptTypeStr,
      tasks: encryptTypeArr,
    },
  },
};
