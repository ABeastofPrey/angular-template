// const { protocol, hostname, port } = location;
const protocol = 'http:';
const hostname = 'localhost';
const port = '8090';
const apiUrl = `${protocol}//${hostname}:${port}/`;

export const environment = {
  production: true,
  apiUrl
};
