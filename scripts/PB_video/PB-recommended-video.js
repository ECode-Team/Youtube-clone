// Video data array
const Videos = [
    {
        Thumbnail: "imgs/thumbnails/billie.jpg",
        Title: "Billie Eilish - BIRDS OF A FEATHER (Official Music Video)",
        Channel: "BillieEilish",
        Views: "189M views &#183; 3 month ago",
    },
    {
        Thumbnail: "imgs/thumbnails/last of us 2.jpg",
        Title: "Last of us part 2 full gameplay with all cutscenes",
        Channel: "GamerANH",
        Views: "1M views &#183; 4 month ago",
    },
    {
        Thumbnail: "imgs/thumbnails/backend.jpg",
        Title: "What is backend?",
        Channel: "supresimpdev",
        Views: "1.9M veiws &#183; 6 months ago",
    },
    {
        Thumbnail: "imgs/thumbnails/bitcoin.jpg",
        Title: "What Happens When ALL 21 Million Bitcoin Are Mined?",
        Channel: "CoinGecko",
        Views: "1M veiws &#183; 1 year ago",
    },
    {
        Thumbnail: "imgs/thumbnails/got talent.jpg",
        Title: "This boy sang the song better than the singer himself",
        Channel: "GotTallent",
        Views: "24M veiws &#183; 3 year ago",
    },
    {
        Thumbnail: "imgs/thumbnails/hq723.avif",
        Title: "$1 vs $10,000,000 Chess Sets!",
        Channel: "RookMoves Chess",
        Views: "1.5M views &#183; 1years ago",
    },
    {
        Thumbnail: "imgs/thumbnails/hq728.webp",
        Title: "Classical Villain - Classical Music For Villains",
        Channel: "Essential Classics",
        Views: "1.5M views &#183; 5 month ago",
    },
    {
        Thumbnail: "imgs/thumbnails/hq721.avif",
        Title: "INTENSE Over-the-Board Time Scramble vs a Chess.comOpponent!(ChessUp 2)",
        Channel: "Eric Rosen &#x2713;",
        Views: "80K views &#183; 3 week ago",
    },
    {
        Thumbnail: "imgs/thumbnails/singer.jpg",
        Title: "Is Fairy Tail the best Eurovision song?",
        Channel: "AlexanderRybak",
        Views: "12M veiws &#183; 4 year ago",
    },
    {
        Thumbnail: "imgs/thumbnails/metamask.jpg",
        Title: "Complete guid to metamask and tutorial to install and use it",
        Channel: "CoinGecko",
        Views: "435K veiws &#183; 4 months ago",
    },
    {
        Thumbnail: "imgs/thumbnails/last of us.jpg",
        Title: "Last of us part 2 last chapter gameplay. Lets finish it!",
        Channel: "GamerANH",
        Views: "600K veiws &#183; 2 months ago",
    },
    {
        Thumbnail: "imgs/thumbnails/iterstellar.jpg",
        Title: "Interestellar background music",
        Channel: "GamerANH",
        Views: "900K veiws &#183; 7 months ago",
    },
    {
        Thumbnail: "imgs/thumbnails/dodge.jpg",
        Title: "Dodge Challenger Hellcat SRT Redeye Widebody | The Ultimate Muscle Car",
        Channel: "HitMakers",
        Views: "1M veiws &#183; 1 year ago",
    },
    {
        Thumbnail: "imgs/thumbnails/hqdefault.avif",
        Title: "RUBIK`S CUBE from LEVEL 1 to LEVEL 100 | Mind Blowing mechanism",
        Channel: "Rubik's &#x2713;",
        Views: "9.5M views &#183; 10 month ago",
    }
];

// Generate video cards
function GenerateVideoCards() {
    const VideoList = document.querySelectorAll(".video-list");

    VideoList.forEach(VideoList => {
        // For each on of objects
        Videos.forEach(video => {
            const VideoCard = document.createElement("div");
            VideoCard.classList.add("video-card");

            VideoCard.innerHTML = `
        <img src="${video.Thumbnail}" alt="Thumbnail">
            <div class="video-card-info">
                <h4>${video.Title}</h4>
                <span>${video.Channel}</span>
                <span>${video.Views} · ${video.time}</span>
            </div>
            <div class="ellipsis"><img src="imgs/Icons/playback page/more-icon.png"></div>
        `;

            // Make VideoCard child of VideoList
            VideoList.appendChild(VideoCard);
        });
    })
}

GenerateVideoCards();