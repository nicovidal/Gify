export const getGif = async(category) => {

    const key = 'W3jXvY6UBsTPs9O3K2Fv3XnacuMgxu1S';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    //get gifs things i need for show on my app
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}