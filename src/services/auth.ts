interface ResponseProps {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<ResponseProps> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'pliobfcd8p0vch4398hfvdpofdffdffdHUFBUBFkjnjkKJnJKs',
        user: {
          name: 'Cristian',
          email: 'contato@cristian.com.br',
        },
      });
    }, 2000);
  });
}
