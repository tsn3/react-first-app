let features = [
  {
    name: "Todo",
    url: "todo",
  },
  {
    name: "Weather",
    url: "weather",
  },
  {
    name: "Third Feature",
    url: "third_feature",
  },
];

export const getFeatures = () => {
  return features;
}

export const getFeature = (number) => {
  return features.find(
    (feature) => feature.number === number
  )
}