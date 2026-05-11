export const CATEGORIES = [
  {
    id: "training",
    label: "Training",
    color: "#af1a83",
    subcategoryGroups: [
      {
        id: "gruppe",
        label: "Gruppe",
        subcategories: [
          {
            id: "training-erwachsene",
            label: "Erwachsene",
            color: "#af1a83",
          },
          { id: "training-jugend", label: "Jugend", color: "#801aaf" },
          { id: "training-kinder", label: "Kinder", color: "#801aaf" },
          {
            id: "training-erste-mannschaft",
            label: "1. Mannschaft",
            color: "#c7153c",
          },
          {
            id: "training-zweite-mannschaft",
            label: "2. Mannschaft",
            color: "#c7153c",
          },
        ],
      },
      {
        id: "tag",
        label: "Tag",
        subcategories: [
          { id: "training-montag", label: "Montag" },
          { id: "training-dienstag", label: "Dienstag" },
          { id: "training-mittwoch", label: "Mittwoch" },
          { id: "training-donnerstag", label: "Donnerstag" },
          { id: "training-freitag", label: "Freitag" },
          { id: "training-samstag", label: "Samstag" },
        ],
      },
    ],
    get subcategories() {
      return this.subcategoryGroups.flatMap((g) => g.subcategories);
    },
  },

  {
    id: "turnier",
    label: "Turnier",
    color: "#1200b4",
    subcategoryGroups: [
      {
        id: "gruppe",
        label: "Gruppe",
        subcategories: [
          { id: "turnier-erwachsene", label: "Erwachsene", color: "#1200b4" },
          { id: "turnier-jugend", label: "Jugend", color: "#007bb4" },
          { id: "turnier-kinder", label: "Kinder", color: "#007bb4" },
        ],
      },
    ],
    get subcategories() {
      return this.subcategoryGroups.flatMap((g) => g.subcategories);
    },
  },

  {
    id: "spieltag",
    label: "Spieltag",
    color: "#fa520f",
    subcategoryGroups: [
      {
        id: "mannschaft",
        label: "Mannschaft",
        subcategories: [
          {
            id: "spieltag-erste-mannschaft",
            label: "1. Mannschaft",
            color: "#fa520f",
          },
          {
            id: "spieltag-zweite-mannschaft",
            label: "2. Mannschaft",
            color: "#887714",
          },
        ],
      },
    ],
    get subcategories() {
      return this.subcategoryGroups.flatMap((g) => g.subcategories);
    },
  },

  {
    id: "event",
    label: "Event",
    color: "#0d9c00",
    subcategoryGroups: [],
    get subcategories() {
      return this.subcategoryGroups.flatMap((g) => g.subcategories);
    },
  },
];
