import featuresJson from "@json/features.json"

export function getFeatures() {
  const features = featuresJson.map((f) => f)
  return features
}
