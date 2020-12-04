export default function useHistory (settings = {}) {
  const { message, test } = settings;
  return {
    message,
    test,
  };
}