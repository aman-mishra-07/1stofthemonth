import Dental from './components/Dental'
import Skin from './components/Skin'
import Sight from './components/Sight'
import BloodTest from './components/BloodTest'

const page = ({searchParams}) => {
  const tabs = {
    'dental' : <Dental />,
    'skin' : <Skin/>,
    'sight' : <Sight />,
    'blood-test' : <BloodTest />,
}

return (
<div>
  {tabs[searchParams.tab] ? tabs[searchParams.tab] : tabs.dental}
</div>
)
}

export default page
