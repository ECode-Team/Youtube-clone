export let Shorts = [];

export async function fetchShorts() {
    try {
        const response = await fetch('https://ecopy369.pythonanywhere.com/api/short_video/')
        if (!response.ok) {
            throw new Error(`Failed to fetch video error: ${response.status}`)
        }
        const data = await response.json();
        
        Shorts = [
            {
                Thumbnail: data[0].thumbnail,
                Title: data[0].title,
                Channel: data[0].uploaded_by.title,
                Views: `${data[0].views} &#183; 6 months ago`,
                link: data[0].video_url,
            },
            {
                Thumbnail: data[1].thumbnail,
                Title: data[1].title,
                Channel: data[1].uploaded_by.title,
                Views: `${data[1].views} &#183; 2 months ago`,
                link: data[1].video_url,
            },
            {
                Thumbnail: data[2].thumbnail,
                Title: data[2].title,
                Channel: data[2].uploaded_by.title,
                Views: `${data[2].views} &#183; 9 months ago`,
                link: data[2].video_url,
            },
            {
                Thumbnail: data[3].thumbnail,
                Title: data[3].title,
                Channel: data[3].uploaded_by.title,
                Views: `${data[3].views} &#183; 11 months ago`,
                link: data[3].video_url,
            },
            {
                Thumbnail: data[4].thumbnail,
                Title: data[4].title,
                Channel: data[4].uploaded_by.title,
                Views: `${data[4].views} &#183; 1 year ago`,
                link: data[4].video_url,
            },
            {
                Thumbnail: data[5].thumbnail,
                Title: data[5].title,
                Channel: data[5].uploaded_by.title,
                Views: `${data[5].views} &#183; 3 years ago`,
                link: data[5].video_url,
            },
            {
                Thumbnail: data[6].thumbnail,
                Title: data[6].title,
                Channel: data[6].uploaded_by.title,
                Views: `${data[6].views} &#183; 2 months ago`,
                link: data[6].video_url,
            }
        ];
    }
    catch (error) {
        console.error("error fetching videos", error);
    }
}

fetchShorts();