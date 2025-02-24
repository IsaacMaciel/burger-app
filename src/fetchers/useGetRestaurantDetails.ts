import { useQuery } from '@tanstack/react-query';
import enhancedFetcher from '@/fetchers/fetcher';
import { RestaurantDetails } from '@/types/restaurantDetails';

const useGetRestaurantDetails = () => {
  return useQuery<RestaurantDetails>({
    queryKey: ['restaurantDetails'],
    queryFn: async () => {
      const response = await enhancedFetcher('venue/9');
      return response.json();
    },
  });
};

export default useGetRestaurantDetails;
