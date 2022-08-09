import {useParams} from "react-router-dom";
import {getFeature} from "../data";


export const Feature = () => {
  let params = useParams()
  let feature = getFeature(parseInt(params.featureId, 10));

  return (
    <main style={{ padding: "1rem" }}>
      <p>
        {feature.name}: {feature.url}
      </p>
    </main>
  );
}