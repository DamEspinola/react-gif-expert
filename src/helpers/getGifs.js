
export const getGifs = async(category)=>{

     const url = `https://api.giphy.com/v1/gifs/search?api_key=PTctBf4GwrfSnOVM7SevMoB6Kcob44VQ&q=${category}&Limit=10`;
     const resp = await fetch(url);
     const {data} = await resp.json(); // "json" enviar algunos datos desde el servidor al cliente
     const gifs = data.map( img => ({
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url
     }));

     return gifs;
}    
