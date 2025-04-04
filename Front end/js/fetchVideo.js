export let Videos = [];

export async function fetchVideo() {
    try {
        const response = await fetch('https://ecopy369.pythonanywhere.com/api/video/')
        if (!response.ok) {
            throw new Error(`Failed to fetch video error: ${response.status}`)
        }
        const data = await response.json();

        Videos = [
            {
                Thumbnail: data[0].thumbnail,
                Title: data[0].title,
                Channel: data[0].uploaded_by.title,
                channelPicture : data[0].uploaded_by.profile_picture,
                Views: `${data[0].views} &#183; 6 months ago`,
                link: data[0].video_url,
                Category: data[0].category
            },
            {
                Thumbnail: data[1].thumbnail,
                Title: data[1].title,
                Channel: data[1].uploaded_by.title,
                channelPicture : data[1].uploaded_by.profile_picture,
                Views: `${data[1].views} &#183; 2 months ago`,
                link: data[1].video_url,
                Category: data[1].category
            },
            {
                Thumbnail: data[2].thumbnail,
                Title: data[2].title,
                Channel: data[2].uploaded_by.title,
                channelPicture : data[2].uploaded_by.profile_picture,
                Views: `${data[2].views} &#183; 9 months ago`,
                link: data[2].video_url,
                Category: data[2].category
            },
            {
                Thumbnail: data[3].thumbnail,
                Title: data[3].title,
                Channel: data[3].uploaded_by.title,
                channelPicture : data[3].uploaded_by.profile_picture,
                Views: `${data[3].views} &#183; 11 months ago`,
                link: data[3].video_url,
                Category: data[3].category
            },
            {
                Thumbnail: data[4].thumbnail,
                Title: data[4].title,
                Channel: data[4].uploaded_by.title,
                channelPicture : data[4].uploaded_by.profile_picture,
                Views: `${data[4].views} &#183; 1 year ago`,
                link: data[4].video_url,
                Category: data[4].category
            },
            {
                Thumbnail: data[5].thumbnail,
                Title: data[5].title,
                Channel: data[5].uploaded_by.title,
                channelPicture : data[5].uploaded_by.profile_picture,
                Views: `${data[5].views} &#183; 3 years ago`,
                link: data[5].video_url,
                Category: data[5].category
            },
            {
                Thumbnail: data[6].thumbnail,
                Title: data[6].title,
                Channel: data[6].uploaded_by.title,
                channelPicture : data[6].uploaded_by.profile_picture,
                Views: `${data[6].views} &#183; 2 months ago`,
                link: data[6].video_url,
                Category: data[6].category
            },
            {
                Thumbnail: data[7].thumbnail,
                Title: data[7].title,
                Channel: data[7].uploaded_by.title,
                channelPicture : data[7].uploaded_by.profile_picture,
                Views: `${data[7].views} &#183; 1 years ago`,
                link: data[7].video_url,
                Category: data[7].category
            },
            {
                Thumbnail: data[8].thumbnail,
                Title: data[8].title,
                Channel: data[8].uploaded_by.title,
                channelPicture : data[8].uploaded_by.profile_picture,
                Views: `${data[8].views} &#183; 5 months ago`,
                link: data[8].video_url,
                Category: data[8].category
            },
            {
                Thumbnail: data[9].thumbnail,
                Title: data[9].title,
                Channel: data[9].uploaded_by.title,
                channelPicture : data[9].uploaded_by.profile_picture,
                Views: `${data[9].views} &#183; 3 years ago`,
                link: data[9].video_url,
                Category: data[9].category
            },
            {
                Thumbnail: data[10].thumbnail,
                Title: data[10].title,
                Channel: data[10].uploaded_by.title,
                channelPicture : data[10].uploaded_by.profile_picture,
                Views: `${data[10].views} &#183; 6 months ago`,
                link: data[10].video_url,
                Category: data[10].category
            },
            {
                Thumbnail: data[11].thumbnail,
                Title: data[11].title,
                Channel: data[11].uploaded_by.title,
                channelPicture : data[11].uploaded_by.profile_picture,
                Views: `${data[11].views} &#183; 6 months ago`,
                link: data[11].video_url,
                Category: data[11].category
            },
            {
                Thumbnail: data[12].thumbnail,
                Title: data[12].title,
                Channel: data[12].uploaded_by.title,
                channelPicture : data[12].uploaded_by.profile_picture,
                Views: `${data[12].views} &#183; 6 months ago`,
                link: data[12].video_url,
                Category: data[12].category
            },
            {
                Thumbnail: data[13].thumbnail,
                Title: data[13].title,
                Channel: data[13].uploaded_by.title,
                channelPicture : data[13].uploaded_by.profile_picture,
                Views: `${data[13].views} &#183; 6 months ago`,
                link: data[13].video_url,
                Category: data[13].category
            },
            {
                Thumbnail: data[14].thumbnail,
                Title: data[14].title,
                Channel: data[14].uploaded_by.title,
                channelPicture : data[14].uploaded_by.profile_picture,
                Views: `${data[14].views} &#183; 1 years ago`,
                link: data[14].video_url,
                Category: data[14].category
            },
            {
                Thumbnail: data[15].thumbnail,
                Title: data[15].title,
                Channel: data[15].uploaded_by.title,
                channelPicture : data[15].uploaded_by.profile_picture,
                Views: `${data[15].views} &#183; 1 years ago`,
                link: data[15].video_url,
                Category: data[15].category
            },
            {
                Thumbnail: data[16].thumbnail,
                Title: data[16].title,
                Channel: data[16].uploaded_by.title,
                channelPicture : data[16].uploaded_by.profile_picture,
                Views: `${data[16].views} &#183; 1 years ago`,
                link: data[16].video_url,
                Category: data[16].category
            },
            {
                Thumbnail: data[17].thumbnail,
                Title: data[17].title,
                Channel: data[17].uploaded_by.title,
                channelPicture : data[17].uploaded_by.profile_picture,
                Views: `${data[17].views} &#183; 1 years ago`,
                link: data[17].video_url,
                Category: data[17].category
            },
            {
                Thumbnail: data[18].thumbnail,
                Title: data[18].title,
                Channel: data[18].uploaded_by.title,
                channelPicture : data[18].uploaded_by.profile_picture,
                Views: `${data[18].views} &#183; 1 years ago`,
                link: data[18].video_url,
                Category: data[18].category
            },
            {
                Thumbnail: data[19].thumbnail,
                Title: data[19].title,
                Channel: data[19].uploaded_by.title,
                channelPicture : data[19].uploaded_by.profile_picture,
                Views: `${data[19].views} &#183; 1 years ago`,
                link: data[19].video_url,
                Category: data[19].category
            },
            {
                Thumbnail: data[20].thumbnail,
                Title: data[20].title,
                Channel: data[20].uploaded_by.title,
                channelPicture : data[20].uploaded_by.profile_picture,
                Views: `${data[20].views} &#183; 1 years ago`,
                link: data[20].video_url,
                Category: data[20].category
            },
            {
                Thumbnail: data[21].thumbnail,
                Title: data[21].title,
                Channel: data[21].uploaded_by.title,
                channelPicture : data[21].uploaded_by.profile_picture,
                Views: `${data[21].views} &#183; 1 years ago`,
                link: data[21].video_url,
                Category: data[21].category
            },
            {
                Thumbnail: data[22].thumbnail,
                Title: data[22].title,
                Channel: data[22].uploaded_by.title,
                channelPicture : data[22].uploaded_by.profile_picture,
                Views: `${data[22].views} &#183; 1 years ago`,
                link: data[22].video_url,
                Category: data[22].category
            },
            {
                Thumbnail: data[23].thumbnail,
                Title: data[23].title,
                Channel: data[23].uploaded_by.title,
                channelPicture : data[23].uploaded_by.profile_picture,
                Views: `${data[23].views} &#183; 1 years ago`,
                link: data[23].video_url,
                Category: data[23].category
            },
            {
                Thumbnail: data[24].thumbnail,
                Title: data[24].title,
                Channel: data[24].uploaded_by.title,
                channelPicture : data[24].uploaded_by.profile_picture,
                Views: `${data[24].views} &#183; 1 years ago`,
                link: data[24].video_url,
                Category: data[24].category
            },
            {
                Thumbnail: data[25].thumbnail,
                Title: data[25].title,
                Channel: data[25].uploaded_by.title,
                channelPicture : data[25].uploaded_by.profile_picture,
                Views: `${data[25].views} &#183; 1 years ago`,
                link: data[25].video_url,
                Category: data[25].category
            },
            {
                Thumbnail: data[26].thumbnail,
                Title: data[26].title,
                Channel: data[26].uploaded_by.title,
                channelPicture : data[26].uploaded_by.profile_picture,
                Views: `${data[26].views} &#183; 1 years ago`,
                link: data[26].video_url,
                Category: data[26].category
            },
            {
                Thumbnail: data[27].thumbnail,
                Title: data[27].title,
                Channel: data[27].uploaded_by.title,
                channelPicture : data[27].uploaded_by.profile_picture,
                Views: `${data[27].views} &#183; 1 years ago`,
                link: data[27].video_url,
                Category: data[27].category
            },
            {
                Thumbnail: data[28].thumbnail,
                Title: data[28].title,
                Channel: data[28].uploaded_by.title,
                channelPicture : data[28].uploaded_by.profile_picture,
                Views: `${data[28].views} &#183; 1 years ago`,
                link: data[28].video_url,
                Category: data[28].category
            },
            {
                Thumbnail: data[29].thumbnail,
                Title: data[29].title,
                Channel: data[29].uploaded_by.title,
                channelPicture : data[29].uploaded_by.profile_picture,
                Views: `${data[29].views} &#183; 1 years ago`,
                link: data[29].video_url,
                Category: data[29].category
            },
            {
                Thumbnail: data[30].thumbnail,
                Title: data[30].title,
                Channel: data[30].uploaded_by.title,
                channelPicture : data[30].uploaded_by.profile_picture,
                Views: `${data[30].views} &#183; 1 years ago`,
                link: data[30].video_url,
                Category: data[30].category
            },
            {
                Thumbnail: data[31].thumbnail,
                Title: data[31].title,
                Channel: data[31].uploaded_by.title,
                channelPicture : data[31].uploaded_by.profile_picture,
                Views: `${data[31].views} &#183; 1 years ago`,
                link: data[31].video_url,
                Category: data[31].category
            },
            {
                Thumbnail: data[32].thumbnail,
                Title: data[32].title,
                Channel: data[32].uploaded_by.title,
                channelPicture : data[32].uploaded_by.profile_picture,
                Views: `${data[32].views} &#183; 1 years ago`,
                link: data[32].video_url,
                Category: data[32].category
            },
            {
                Thumbnail: data[33].thumbnail,
                Title: data[33].title,
                Channel: data[33].uploaded_by.title,
                channelPicture : data[33].uploaded_by.profile_picture,
                Views: `${data[33].views} &#183; 1 years ago`,
                link: data[33].video_url,
                Category: data[33].category
            },
            {
                Thumbnail: data[34].thumbnail,
                Title: data[34].title,
                Channel: data[34].uploaded_by.title,
                channelPicture : data[34].uploaded_by.profile_picture,
                Views: `${data[34].views} &#183; 1 years ago`,
                link: data[34].video_url,
                Category: data[34].category
            },
            {
                Thumbnail: data[35].thumbnail,
                Title: data[35].title,
                Channel: data[35].uploaded_by.title,
                channelPicture : data[35].uploaded_by.profile_picture,
                Views: `${data[35].views} &#183; 1 years ago`,
                link: data[35].video_url,
                Category: data[35].category
            }
        ];
    }
    catch (error) {
        console.error("error fetching videos", error);
    }
}

fetchVideo();