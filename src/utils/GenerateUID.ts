export const generateUID = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const generatedNumbers = new Set();
  let result = '';
  const charactersLength = characters.length;
  const maxAttempts = 100;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    result = '';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    if (!generatedNumbers.has(result)) {
      generatedNumbers.add(result);
      break;
    }
  }

  return result;
};
