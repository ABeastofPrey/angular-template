const { protocol, hostname, port } = location;
const url = `${protocol}//${hostname}:${port}/`;

export const environment = {
  production: true,
  url
};
