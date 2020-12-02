export default {
  name: "songs",
  title: "Songs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Song Title",
      type: "string",
    },
    {
      name: "cover",
      title: "Song Cover",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "artist",
      title: "Artist",
      type: "string",
    },
    {
      name: "audio",
      title: "Audio Link",
      type: "string",
    },
    {
      name: "active",
      title: "Set as active image?",
      description: "If checked, this song will display as the default song.",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
  ],
}
