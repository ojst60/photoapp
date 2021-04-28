import { Storage, Auth, API } from "aws-amplify";
import { useState } from "react";
import * as mutations from "./graphql/mutations";

function Uploadform() {
  const [detail, setDetail] = useState({ description: " ", file: "" });
  const [user, setUser] = useState("");
  const [url, setUrl] = useState("");
  const [keey, setKeey] = useState("");
  const a = Auth.currentAuthenticatedUser().then((username) =>
    setUser(username.username)
  );

  const todoDetails = {
    name: keey,
    owner: user,
    description: detail.description,
    url: url,
  };

  async function Geturl() {
    const signedURL = await Storage.get(keey);
    setUrl(signedURL);
  }

  async function Resetvalue() {}

  async function CreateAPI() {
    const newAPI = await API.graphql({
      query: mutations.createTodo,
      variables: { input: todoDetails },
    });
    return newAPI;
  }

  async function StoragePut() {
    try {
      await Storage.put(detail.file.name, detail.file, {
        contentType: detail.file.type,
      }).then((jul) => setKeey(jul.key));
    } catch (err) {
      console.log("Error uploading file: ", err);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    StoragePut();
    Geturl();
    CreateAPI();
    setDetail({ description: " ", ...detail });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={detail.description}
          type="textarea"
          placeholder="Description"
          onChange={(e) =>
            setDetail({ ...detail, description: e.target.value })
          }
        />
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => setDetail({ ...detail, file: e.target.files[0] })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Uploadform;
