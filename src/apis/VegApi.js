import restaurants from '../mock/mockRestaurants';
import foursquare from '../mock/mockFoursquare';

export const getAll = () => {
    const data = foursquare.response.groups[0].items.map(item => item.venue);
    return new Promise((resolve) => resolve(data));
}



