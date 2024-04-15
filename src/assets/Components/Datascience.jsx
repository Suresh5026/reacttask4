export default function Datascience(){
    return (
        <>
        <div className="Container-f">
            <div className="card">
                <div className="card-f">
                    <div className="img-f">
                        <img className="imgTag" src="data:image/jpeg;base64,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" alt="full" />
                    </div>
                    <h3>Data Science</h3>
                    <p>Roles and responsibilites of Data Scientiest</p> 
                    <button className="btnClass"><a href="">Get the course details for more</a></button>
                </div>
            </div>
            <div className="card">
                <div className="card-f">
                    <div className="img-f">
                        <img className="imgTag" src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18134.jpg" alt="full" />
                    </div>
                    <h3>Data Science for Commerce</h3>
                    <p>Can a commerce student do datascience?</p> 
                    <button className="btnClass"><a href="">Get the course details for more</a></button>
                </div>
            </div>
            <div className="card">
                <div className="card-f">
                    <div className="img-f">
                        <img className="imgTag" src="https://www.shutterstock.com/shutterstock/photos/2255695571/display_1500/stock-photo-big-data-technology-and-data-science-data-scientist-querying-analysing-and-visualizing-complex-2255695571.jpg" alt="full" />
                    </div>
                    <h3>Data Scientist</h3>
                    <p>To become a Data Scientist</p> 
                    <button className="btnClass"><a href="">Get the course details for more</a></button>
                </div>
            </div>
        </div>
        </>
    )
}