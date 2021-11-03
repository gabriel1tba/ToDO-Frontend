const formattedTimestamp = (timeStamp: string) => {
  return new Date(timeStamp).toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};

export default formattedTimestamp
