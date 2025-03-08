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
                Thumbnail: data[0].thumbnail,
                Title: data[0].title,
                Channel: data[0].uploaded_by.title,
                Views: `${data[0].views} &#183; 2 months ago`,
                link: data[0].video_url,
            },
            {
                Thumbnail: data[0].thumbnail,
                Title: data[0].title,
                Channel: data[0].uploaded_by.title,
                Views: `${data[0].views} &#183; 9 months ago`,
                link: data[0].video_url,
            },
            {
                Thumbnail: data[0].thumbnail,
                Title: data[0].title,
                Channel: data[0].uploaded_by.title,
                Views: `${data[0].views} &#183; 11 months ago`,
                link: data[0].video_url,
            },
            {
                Thumbnail: data[0].thumbnail,
                Title: data[0].title,
                Channel: data[0].uploaded_by.title,
                Views: `${data[0].views} &#183; 1 year ago`,
                link: data[0].video_url,
            },
            {
                Thumbnail: data[0].thumbnail,
                Title: data[0].title,
                Channel: data[0].uploaded_by.title,
                Views: `${data[0].views} &#183; 3 years ago`,
                link: data[0].video_url,
            },
            {
                Thumbnail: data[0].thumbnail,
                Title: data[0].title,
                Channel: data[0].uploaded_by.title,
                Views: `${data[0].views} &#183; 2 months ago`,
                link: data[0].video_url,
            }
        ];
    }
    catch (error) {
        console.error("error fetching videos", error);
    }
}

fetchShorts();