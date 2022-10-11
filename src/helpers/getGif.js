export const getGif = async(category) => {

    const key = '1EU597I1A6p3AwgZZENBajFpjjmgZynK';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key }=${ category }&limit=10`;

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