// メールアドレスを検証する（@が含まれればOK）
function validateEmail(email) {
  return email.match(/@/) ? email : new Error(`無効なメールアドレスです：${email}`);
}

const email = null;//"jane@doe.com";
try {
  const validatedEmail = validateEmail(email);
  if (validatedEmail instanceof Error) {
    console.error(validatedEmail.message);
  } else {
    console.log(`正しい形式のアドレスです：${validatedEmail}`);
  }
} catch(err) {
  console.error(`エラー：${err.message}\n${err.stack}`);
}
