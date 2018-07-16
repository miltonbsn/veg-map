const url = 'https://api.foursquare.com/v2/venues/explore?client_id=M3NWSYKLIE0VD1QNNS1DAJJ0TL3TQNIMD2D4P240N11KWZHP&client_secret=NPFWAHR4B02KDKZEK4HIVU23V3V3151ABSZEV23GVNS04TC2&v=20180711&ll=-27.6221602,-48.4918816&query=comida vegetariana&limit=50';

export const getAll = () => {
     return new Promise((resolve) => {
        fetch(url)
            .then(response => response.json())
            .then(foursquare => {
                const data = foursquare.response.groups[0].items.map(item => {
                    const venue = item.venue;
                    const address = venue.location.formattedAddress;
                    const formattedAddress = address.join(", ");
                    venue.customAddress = formattedAddress;
                    return venue;
                });
                resolve(data);
            });
     });
}



