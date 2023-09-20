// Função para gerar senhas seguras
export function generatePassword(
  length: number,
  useUppercase: boolean,
  useLowercase: boolean,
  useNumbers: boolean,
  useSymbols: boolean
): string {
  const charset = [];
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  if (useLowercase) charset.push(...lowercaseChars);
  if (useUppercase) charset.push(...uppercaseChars);
  if (useNumbers) charset.push(...numberChars);
  if (useSymbols) charset.push(...symbolChars);

  if (charset.length === 0) {
    throw new Error("Selecione pelo menos um conjunto de caracteres.");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Função para avaliar a força da senha
export function getPasswordStrength(password: string): Level {
  const length = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()_+\-=\[\]{}|;:',.<>?]/.test(password);

  const characterSetSize =
    (hasLowercase ? 26 : 0) +
    (hasUppercase ? 26 : 0) +
    (hasNumbers ? 10 : 0) +
    (hasSymbols ? 14 : 0); // Número de caracteres possíveis

  const passwordStrength = Math.pow(characterSetSize, length);

  if (passwordStrength < 10 ** 6) {
    return "tooWeak";
  } else if (passwordStrength < 10 ** 12) {
    return "weak";
  } else if (passwordStrength < 10 ** 18) {
    return "medium";
  } else {
    return "strong";
  }
}

// Exemplo de uso:
// const password = generatePassword(12, true, true, true, true);
// console.log("Senha gerada:", password);
// console.log("Força da senha:", getPasswordStrength(password));
