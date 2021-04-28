export const formattedTimestamp = (timeStamp: string) => {
  return new Date(timeStamp).toLocaleString('pt-BR');
};

export default formattedTimestamp;
