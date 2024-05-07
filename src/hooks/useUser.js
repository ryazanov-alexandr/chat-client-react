import { nouns } from "../services/userService/dictionaries/nouns.js";
import { adjectives } from "../services/userService/dictionaries/adjectives.js";
import { useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState({ name: "", avatar: "" });

  const userName = getUserName();

  setUser({
    name: userName,
    avatar: getAvatar(userName)
  })

  return user;
};

function getAvatar(text) {
  return `https://robohash.org/${text}.jpg?size=64x64`;
}

function getUserName() {
  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1).toLocaleLowerCase();
  noun = noun.toLocaleLowerCase();

  const userName = adjective + " " + noun;
  sessionStorage.setItem('username', userName);

  return userName;
}

export const user = {
    name: getUserName(),
    avatar: getAvatar()
}
