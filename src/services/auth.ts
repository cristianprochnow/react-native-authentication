export function signIn() {
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
