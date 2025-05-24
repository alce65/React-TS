const url = 'https://jsonplaceholder.typicode.com/users';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const getUser = (): Promise<User> => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('API response was not ok');
      }
      return response.json();
    })
    .then((data) => data[0]);
};
