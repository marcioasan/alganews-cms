import { useEffect, useState } from "react";
import styled from "styled-components";
import { Metric } from "../../sdk/@types";
import MetricService from "../../sdk/services/Metric.service";
import CircleChart from "../components/CircleChart";

export default function UserTopTags() {

  //8.26. Top 3 Tags
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])

  //8.32. Aplicando error boundaries 6'17"
  const [error, setError] = useState<Error>()

  useEffect(() => {
    MetricService
      .getTop3Tags()
      .then(setTopTags)
      .catch(error => setError(new Error(error.message)))
  }, [])

  if(error)
  throw error
  
  return <UserTopTagsWrapper>
    {
      topTags.map((tag, i) => {
        return <CircleChart
          key={i} 
          progress={tag.percentage}
          caption={tag.tagName}
          theme={i === 0 ? 'primary' : 'default'}
          size={88}
        />
      })
    }
  </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`
