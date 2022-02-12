function generateQueryString(
  params: {[key: string]: string | number | boolean | string[] | undefined}
): string {
  const convertedParams: {[key: string]: string} = {}

  //8.17. A Developer Experience do SDK - 12'
  Object
    .keys(params)
    .forEach(key => {
      const param = params[key]
      if(param)
        convertedParams[key] = String(param)
    })

  const urlParams = new URLSearchParams(convertedParams)
  return `?${urlParams.toString()}`
}

export default generateQueryString