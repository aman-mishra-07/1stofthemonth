import React from 'react'
import Stared from './components/Stared'
import FamilyHistory from './components/FamilyHistory'
import MyInformation from './components/MyInformation'
import ExportPdf from './components/ExportPdf'
import { Suspense } from 'react'

const page = ({searchParams}) => {
    const tabs = {
        'stared' : <Stared />,
        'family-history' : <FamilyHistory/>,
        'my-information' : <MyInformation />,
        'export-pdf' : <ExportPdf />,
    }

  return (
    <div>
      <Suspense>
      {tabs[searchParams.tab] ? tabs[searchParams.tab] : tabs.stared}
      </Suspense>
    </div>
  )
}

export default page
