import React from 'react'

const CatchAllRoutePage = async({params}: {
    params: Promise<{slug: string[]}>
}) => {
    console.log(await params);
  return (
    <div className='text-5xl'>Catch All Route Page</div>
  )
}

export default CatchAllRoutePage