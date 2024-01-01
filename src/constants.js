export const youtubeButtons = [
  "All",
  "Mixes",
  "Coding",
  "Library",
  "Music",
  "Gaming",
  "Live",
  "News",
  "Sports",
  "Fashion",
  "Education",
  "Technology",
];

export const commentsData = [
  {
    name: "Lokesh kumar",
    Comment: "Hello nice to meet you",
    replies: [
      {
        name: "Lokesh kumar",
        Comment: "Hello nice to meet you",
        replies: [
          {
            name: "Lokesh kumar",
            Comment: "Hello nice to meet you",
            replies: [],
          },
          {
            name: "Lokesh kumar",
            Comment: "Hello nice to meet you",
            replies: [
              {
                name: "Lokesh kumar",
                Comment: "Hello nice to meet you",
                replies: [],
              },
              {
                name: "Lokesh kumar",
                Comment: "Hello nice to meet you",
                replies: [
                  {
                    name: "Lokesh kumar",
                    Comment: "Hello nice to meet you",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lokesh kumar",
        Comment: "Hello nice to meet you",
        replies: [],
      },
      {
        name: "Lokesh kumar",
        Comment: "Hello nice to meet you",
        replies: [],
      },
    ],
  },
  {
    name: "Lokesh kumar",
    Comment: "Hello nice to meet you",
    replies: [],
  },
  {
    name: "Lokesh kumar",
    Comment: "Hello nice to meet you",
    replies: [
      {
        name: "Lokesh kumar",
        Comment: "Hello nice to meet you",
        replies: [
          {
            name: "Lokesh kumar",
            Comment: "Hello nice to meet you",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Lokesh kumar",
    Comment: "Hello nice to meet you",
    replies: [],
  },
  {
    name: "Lokesh kumar",
    Comment: "Hello nice to meet you",
    replies: [
      {
        name: "Lokesh kumar",
        Comment: "Hello nice to meet you",
        replies: [],
      },
    ],
  },
];
const GOOGLE_API_KEY = "AIzaSyChQOmcuJsYs70ztc5horm2o8weFd_-9Jo";
export const YOUTUBE_API_KEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
