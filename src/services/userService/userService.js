import { nouns } from "./dictionaries/nouns.js";
import { adjectives } from "./dictionaries/adjectives.js";

function getAvatar(text) {
  return `https://robohash.org/${text}.jpg?size=64x64`;
}

function getUserName() {
  if(sessionStorage.getItem('username')) return sessionStorage.getItem('username')


  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1).toLocaleLowerCase();
  noun = noun.toLocaleLowerCase();

  const userName = adjective + " " + noun;
  sessionStorage.setItem('username', userName);

  return userName;
}

const name = getUserName();

export const user = {
    name,
    avatar: getAvatar(name)
}
