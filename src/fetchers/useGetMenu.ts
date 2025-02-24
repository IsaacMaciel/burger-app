import { useQuery } from '@tanstack/react-query';
import enhancedFetcher from '@/fetchers/fetcher';
import { Menu } from '@/types/menu';

const useGetMenu = () => {
  return useQuery<Menu>({
    queryKey: ['menu'],
    queryFn: async () => {
      const response = await enhancedFetcher('menu');
      return response.json();
    },
  });
};

export default useGetMenu;
