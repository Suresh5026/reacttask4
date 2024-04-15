import Career from "./Career";
import Cybersecurity from "./Cybersecurity";
import Datascience from "./Datascience";
import Fullstackdevelopment from "./Fullstackdevelopment";


export default function All(){
    return(
        <>
        <div>
        <Datascience />
        <Career />
        <Cybersecurity />
        <Fullstackdevelopment />
        </div>
        </>
    )
}