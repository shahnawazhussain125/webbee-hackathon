function truncate(text: string, length: number): string {
  return text.slice(0, length);
}

function removeNonNumerics(text: string): string {
  return text.replace(/\D/g, '');
}

function formatPhoneNumber(text: string): string {
  const phoneNumber = removeNonNumerics(text);

  if (phoneNumber.length === 0) return '';
  if (phoneNumber.startsWith('0440')) return `44|${phoneNumber.slice(4)}`;
  if (phoneNumber.startsWith('044')) return `44|${phoneNumber.slice(3)}`;
  if (phoneNumber.startsWith('440')) return `44|${phoneNumber.slice(3)}`;
  if (phoneNumber.startsWith('04')) return `44|${phoneNumber.slice(2)}`;
  if (phoneNumber.startsWith('44')) return `44|${phoneNumber.slice(2)}`;
  if (phoneNumber.startsWith('4')) return `44|${phoneNumber.slice(1)}`;
  if (phoneNumber.startsWith('0')) return `44|${phoneNumber.slice(1)}`;

  return `44|${phoneNumber}`;
}

const IS_SANDBOX = true;
