import resume from "../../public/Damir Yakupov Resume.pdf";

import { FaDownload } from "react-icons/fa";
function ResumePage() {

    return (
      <>
      <div>
          <h2>Resume</h2>
          <div className="card">

              <a href={resume} download>
                  <FaDownload /> Download
              </a>
          </div>

      </div >
  </>
);
}
export default ResumePage;