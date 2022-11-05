const YOUTUBE_API_KEY = "AIzaSyDsXGgLoDdTaG95cVnngZYgfC6F2_Z3bVY"

export async function getList(params){
    let res;
    if(params.nextButtonToken){
        res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&pageToken=${params.nextButtonToken}&key=${YOUTUBE_API_KEY}`);
    }else if (params.prevButtonToken){
        res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&pageToken=${params.prevButtonToken}&key=${YOUTUBE_API_KEY}`);
    }else{
        res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&key=${YOUTUBE_API_KEY}`);
    }
    const data = await res.json()
    return data
}


//https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&pageToken=${params.nextButtonToken}&key=AIzaSyDsXGgLoDdTaG95cVnngZYgfC6F2_Z3bVY