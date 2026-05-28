exports.sendEmail = async ({ to, subject, html }) => {
  return { to, subject, html }
}