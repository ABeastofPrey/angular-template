const { protocol, host, port } = location;
const url = `${protocol}//${host}:${port}/`;

export const environment = {
  production: true,
  url
};
