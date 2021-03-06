module.exports = {
  siteMetadata: {
    title: `Music Player`,
    description: `React music player using Gatsby.js`,
    author: `Eric Holdridge`,
    data: [
      {
        name: "Beaver Creek",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
        id: 0,
        active: true,
      },
      {
        name: "Daylight",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
        id: 1,
        active: false,
      },
      {
        name: "Keep Going",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
        id: 2,
        active: false,
      },
      {
        name: "Nightfall",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
        id: 3,
        active: false,
      },
      {
        name: "Reflection",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
        id: 4,
        active: false,
      },
      {
        name: "Under the City Stars",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
        id: 5,
        active: false,
      },
      {
        name: "Trenches",
        artist: "Philanthrope, Sleepy Fish",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
        id: 6,
        active: false,
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10247",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `64zgrsra`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
  ],
}
