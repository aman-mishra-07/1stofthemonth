import React from 'react'
import Stared from './components/Stared'
import FamilyHistory from './components/FamilyHistory'
import MyInformation from './components/MyInformation'
import ExportPdf from './components/ExportPdf'

const page = ({searchParams}) => {
    const tabs = {
        'stared' : <Stared />,
        'family-history' : <FamilyHistory/>,
        'my-information' : <MyInformation />,
        'export-pdf' : <ExportPdf />,
    }

  return (
    <div>
      {tabs[searchParams.tab] ? tabs[searchParams.tab] : tabs.stared}
    </div>
  )
}

export default page
