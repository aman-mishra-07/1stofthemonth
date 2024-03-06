import All from "./components/All"
import Bowel from "./components/Bowel"
import Breast from "./components/Breast"
import Cervica from "./components/Cervica"
import Skin from "./components/Skin"

const page = ({searchParams}) => {
  const tabs = {
      'all' : <All />,
      'breast' : <Breast/>,
      'skin' : <Skin />,
      'bowel' : <Bowel />,
      'cervica' : <Cervica />,
  }

return (
  <div>
    {tabs[searchParams.tab] ? tabs[searchParams.tab] : tabs.all}  
  </div>
)
}

export default page
