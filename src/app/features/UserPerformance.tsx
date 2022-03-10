import { useEffect, useState } from "react"
import transformEditorMonthlyEarningsIntoChartJs from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs"
import MetricService from "../../sdk/services/Metric.service"
import Chart, { ChartProps } from "../components/Chart/Chart"

export default function UserPerformance() {

  //8.28. Transformando dados para o ChartJs - 5'
  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()
  
  //8.32. Aplicando error boundaries 3'50"
  const [error, setError] = useState<Error>()

  useEffect(() => {
    MetricService
      .getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setEditorEarnings)
      .catch(error => {
        setError(new Error(error.message))
      })
  }, [])

  //8.32. Aplicando error boundaries 4'30"
  if(error)
    throw error

  //8.28. Transformando dados para o ChartJs - 13'50"
  if(!editorEarnings)
    return null

  return <Chart 
    title="Média de performance nos últimos 12 meses"
    data={ editorEarnings }
  />
}