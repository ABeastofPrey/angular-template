const { protocol, hostname, port } = location;
const apiUrl = `${protocol}//${hostname}:${port}/`;

export const environment = {
  production: true,
  apiUrl
};
