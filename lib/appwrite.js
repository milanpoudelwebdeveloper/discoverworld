import { Client, ID, Account } from "react-native-appwrite/src";

export const config = {
  endPoint: "https://cloud.appwrite.io/v1",
  platform: "com.milan.discover",
  projectId: "663adfb80037dfd29771s",
  databaseId: "663ae1aa002afb804897",
  userCollectionId: "663ae1dd00104c95ed3b",
  videoCollectionId: "663ae1fe0018d1ea476f",
  storageId: "663ae3b00013a4c38002",
};

const client = new Client();

client
  .setEndpoint(config.endPoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
