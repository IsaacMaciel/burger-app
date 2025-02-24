const enhancedFetcher = async (url: string): Promise<Response> => {
  return await fetch(`/api/${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default enhancedFetcher;
